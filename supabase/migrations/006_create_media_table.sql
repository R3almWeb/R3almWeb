-- supabase/migrations/006_create_media_table.sql
CREATE TABLE IF NOT EXISTS public.media (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  filename text NOT NULL,
  url text NOT NULL UNIQUE,
  type text NOT NULL, -- e.g., 'image/jpeg'
  size_bytes bigint,
  uploaded_by uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on media
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;

-- Policies for media (Admins upload/view all, Users view public)
CREATE POLICY "Public can view media" ON public.media
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage media" ON public.media
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role = 'ADMIN'
    )
  );

-- Indexes
CREATE INDEX idx_media_url ON public.media(url);
CREATE INDEX idx_media_type ON public.media(type);
CREATE INDEX idx_media_uploaded_by ON public.media(uploaded_by);

-- Trigger for updated_at
CREATE TRIGGER on_media_updated_at BEFORE UPDATE ON public.media
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();