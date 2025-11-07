-- supabase/migrations/003_create_faqs_table.sql
CREATE TABLE IF NOT EXISTS public.faqs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL,
  category text NOT NULL,
  order_index integer DEFAULT 0,
  status text DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on faqs
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- Policies for faqs (Public read, Editors/Admins manage)
CREATE POLICY "Public can view active FAQs" ON public.faqs
  FOR SELECT USING (status = 'active');

CREATE POLICY "Editors/Admins can manage FAQs" ON public.faqs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('EDITOR', 'ADMIN')
    )
  );

-- Indexes
CREATE INDEX idx_faqs_category ON public.faqs(category);
CREATE INDEX idx_faqs_status ON public.faqs(status);
CREATE INDEX idx_faqs_order_index ON public.faqs(order_index);

-- Trigger for updated_at
CREATE TRIGGER on_faqs_updated_at BEFORE UPDATE ON public.faqs
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();