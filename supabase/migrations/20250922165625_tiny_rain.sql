/*
  # Create waitlist signups table

  1. New Tables
    - `waitlist_signups`
      - `id` (uuid, primary key)
      - `email` (text, not null)
      - `product_id` (text, not null)
      - `product_name` (text, not null)
      - `source` (text, optional)
      - `created_at` (timestamp)
      - `confirmed` (boolean, default false)
      - `confirmation_sent_at` (timestamp, optional)

  2. Security
    - Enable RLS on `waitlist_signups` table
    - Add policies for public signup access
    - Add policies for admin management
*/

-- Create waitlist_signups table
CREATE TABLE IF NOT EXISTS waitlist_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  product_id text NOT NULL,
  product_name text NOT NULL,
  source text DEFAULT 'website',
  created_at timestamptz DEFAULT now(),
  confirmed boolean DEFAULT false,
  confirmation_sent_at timestamptz,
  UNIQUE(email, product_id)
);

-- Enable RLS
ALTER TABLE waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can signup for waitlist"
  ON waitlist_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read their own signups"
  ON waitlist_signups
  FOR SELECT
  TO authenticated
  USING (
    email = (
      SELECT email FROM profiles WHERE id = auth.uid()
    )
  );

CREATE POLICY "Admins can read all signups"
  ON waitlist_signups
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admins can update signups"
  ON waitlist_signups
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Admins can delete signups"
  ON waitlist_signups
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_email ON waitlist_signups(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_product_id ON waitlist_signups(product_id);
CREATE INDEX IF NOT EXISTS idx_waitlist_signups_created_at ON waitlist_signups(created_at DESC);