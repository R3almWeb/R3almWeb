-- supabase/migrations/004_create_waitlist_table.sql
CREATE TABLE IF NOT EXISTS public.waitlist (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  product_slug text NOT NULL, -- e.g., 'r3alm-ventures'
  full_name text,
  referral_code text UNIQUE,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'waitlisted', 'invited')),
  notes text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on waitlist
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policies for waitlist (Public insert own, Editors/Admins manage)
CREATE POLICY "Users can insert own waitlist entry" ON public.waitlist
  FOR INSERT WITH CHECK (auth.email() = email);

CREATE POLICY "Editors/Admins can view/manage waitlist" ON public.waitlist
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('EDITOR', 'ADMIN')
    )
  );

-- Indexes
CREATE INDEX idx_waitlist_email ON public.waitlist(email);
CREATE INDEX idx_waitlist_product_slug ON public.waitlist(product_slug);
CREATE INDEX idx_waitlist_status ON public.waitlist(status);

-- Trigger for updated_at
CREATE TRIGGER on_waitlist_updated_at BEFORE UPDATE ON public.waitlist
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();