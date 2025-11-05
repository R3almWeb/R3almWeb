/*
  # Email Logs Table

  1. New Tables
    - `email_logs`
      - `id` (uuid, primary key)
      - `to_email` (text)
      - `from_email` (text)
      - `subject` (text)
      - `template_type` (text)
      - `status` (text)
      - `error_message` (text, nullable)
      - `sent_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `email_logs` table
    - Add policy for admins to read all email logs
    - Add policy for system to insert email logs

  3. Indexes
    - Index on `to_email` for quick lookups
    - Index on `status` for filtering
    - Index on `sent_at` for chronological queries
*/

CREATE TABLE IF NOT EXISTS email_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  to_email text NOT NULL,
  from_email text NOT NULL,
  subject text NOT NULL,
  template_type text NOT NULL DEFAULT 'custom',
  status text NOT NULL DEFAULT 'pending',
  error_message text,
  sent_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Add constraint for status values
ALTER TABLE email_logs 
ADD CONSTRAINT email_logs_status_check 
CHECK (status IN ('pending', 'sent', 'failed', 'bounced'));

-- Add constraint for template types
ALTER TABLE email_logs 
ADD CONSTRAINT email_logs_template_type_check 
CHECK (template_type IN ('waitlist_confirmation', 'contact_confirmation', 'welcome', 'security_alert', 'custom'));

-- Enable RLS
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Admins can read all email logs"
  ON email_logs
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role IN ('admin', 'editor')
    )
  );

CREATE POLICY "System can insert email logs"
  ON email_logs
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

CREATE POLICY "Admins can update email logs"
  ON email_logs
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_email_logs_to_email ON email_logs(to_email);
CREATE INDEX IF NOT EXISTS idx_email_logs_status ON email_logs(status);
CREATE INDEX IF NOT EXISTS idx_email_logs_sent_at ON email_logs(sent_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_logs_template_type ON email_logs(template_type);
CREATE INDEX IF NOT EXISTS idx_email_logs_created_at ON email_logs(created_at DESC);