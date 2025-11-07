-- supabase/migrations/002_create_articles_table.sql
CREATE TABLE IF NOT EXISTS public.articles (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  image_url text,
  category text NOT NULL,
  author_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  published_at timestamp with time zone,
  read_time integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on articles
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Policies for articles (Editors/Admins can manage, Users can read published)
CREATE POLICY "Public can view published articles" ON public.articles
  FOR SELECT USING (status = 'published');

CREATE POLICY "Users can view own articles" ON public.articles
  FOR SELECT USING (auth.uid()::text = author_id::text);

CREATE POLICY "Editors/Admins can manage articles" ON public.articles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles 
      WHERE id = auth.uid() AND role IN ('EDITOR', 'ADMIN')
    )
  );

-- Indexes
CREATE INDEX idx_articles_slug ON public.articles(slug);
CREATE INDEX idx_articles_category ON public.articles(category);
CREATE INDEX idx_articles_status ON public.articles(status);
CREATE INDEX idx_articles_published_at ON public.articles(published_at);

-- Trigger for updated_at
CREATE TRIGGER on_articles_updated_at BEFORE UPDATE ON public.articles
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();