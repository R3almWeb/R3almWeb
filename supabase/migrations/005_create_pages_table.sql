-- supabase/migrations/005_create_pages_table.sql
CREATE TABLE IF NOT EXISTS public.pages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  meta_description text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on pages
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;

-- Policies for pages (Public read published, Editors/Admins manage)
CREATE POLICY "Public can view published pages" ON public.pages
  FOR SELECT USING (status = 'published');

CREATE POLICY "Editors/Admins can manage pages" ON public.pages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('EDITOR', 'ADMIN')
    )
  );

-- Indexes
CREATE INDEX idx_pages_slug ON public.pages(slug);
CREATE INDEX idx_pages_status ON public.pages(status);

-- Trigger for updated_at
CREATE TRIGGER on_pages_updated_at BEFORE UPDATE ON public.pages
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();