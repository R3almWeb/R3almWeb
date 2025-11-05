/*
  # Create system settings table

  1. New Tables
    - `system_settings`
      - `id` (uuid, primary key)
      - `key` (text, unique) - Setting identifier
      - `value` (jsonb) - Setting value (supports complex data)
      - `category` (text) - Setting category (general, security, email, etc.)
      - `description` (text) - Human-readable description
      - `is_public` (boolean) - Whether setting can be read by non-admins
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `system_settings` table
    - Add policy for admins to read/write all settings
    - Add policy for authenticated users to read public settings only

  3. Initial Data
    - Insert default system settings for the application
*/

CREATE TABLE IF NOT EXISTS system_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb NOT NULL DEFAULT '{}',
  category text NOT NULL DEFAULT 'general',
  description text,
  is_public boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can read all settings"
  ON system_settings
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update all settings"
  ON system_settings
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can insert settings"
  ON system_settings
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can delete settings"
  ON system_settings
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Users can read public settings"
  ON system_settings
  FOR SELECT
  TO authenticated
  USING (is_public = true);

-- Create updated_at trigger
CREATE TRIGGER update_system_settings_updated_at
  BEFORE UPDATE ON system_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_system_settings_key ON system_settings(key);
CREATE INDEX IF NOT EXISTS idx_system_settings_category ON system_settings(category);
CREATE INDEX IF NOT EXISTS idx_system_settings_is_public ON system_settings(is_public);

-- Insert default system settings
INSERT INTO system_settings (key, value, category, description, is_public) VALUES
  -- General Settings
  ('site_name', '"Capital R3alm"', 'general', 'Website name displayed in headers and titles', true),
  ('site_description', '"Democratizing wealth creation through innovative Web3 finance solutions"', 'general', 'Default site description for SEO', true),
  ('site_url', '"https://r3alm.com"', 'general', 'Primary website URL', true),
  ('admin_email', '"admin@r3alm.com"', 'general', 'Primary admin email address', false),
  ('support_email', '"support@r3alm.com"', 'general', 'Customer support email address', true),
  ('phone', '"+1 (555) 123-4567"', 'general', 'Primary contact phone number', true),
  ('address', '"123 Blockchain Avenue, Web3 District, NY 10001"', 'general', 'Business address', true),
  
  -- Security Settings
  ('enable_two_factor', 'true', 'security', 'Enable two-factor authentication requirement', false),
  ('session_timeout', '30', 'security', 'Session timeout in minutes', false),
  ('max_login_attempts', '5', 'security', 'Maximum failed login attempts before lockout', false),
  ('password_min_length', '8', 'security', 'Minimum password length requirement', false),
  ('require_password_complexity', 'true', 'security', 'Require complex passwords with special characters', false),
  ('enable_audit_log', 'true', 'security', 'Enable comprehensive audit logging', false),
  
  -- Email Settings
  ('enable_email_sending', 'false', 'email', 'Enable SMTP email notifications', false),
  ('smtp_host', '""', 'email', 'SMTP server hostname', false),
  ('smtp_port', '587', 'email', 'SMTP server port', false),
  ('smtp_secure', 'false', 'email', 'Use SSL/TLS for SMTP connection', false),
  ('smtp_user', '""', 'email', 'SMTP authentication username', false),
  ('smtp_password', '""', 'email', 'SMTP authentication password', false),
  ('smtp_from_email', '""', 'email', 'Default from email address', false),
  ('smtp_from_name', '"Capital R3alm"', 'email', 'Default from name', false),
  ('enable_waitlist_emails', 'true', 'email', 'Send waitlist confirmation emails', false),
  ('enable_contact_emails', 'true', 'email', 'Send contact form confirmation emails', false),
  ('enable_welcome_emails', 'true', 'email', 'Send welcome emails to new users', false),
  ('enable_security_emails', 'true', 'email', 'Send security alert emails', false),
  
  -- Notification Settings
  ('email_notifications', 'true', 'notifications', 'Enable email notifications', false),
  ('push_notifications', 'false', 'notifications', 'Enable browser push notifications', false),
  ('sms_notifications', 'false', 'notifications', 'Enable SMS notifications', false),
  ('marketing_emails', 'true', 'notifications', 'Enable marketing email campaigns', false),
  ('security_alerts', 'true', 'notifications', 'Enable security alert notifications', false),
  ('system_updates', 'true', 'notifications', 'Enable system update notifications', false),
  
  -- Content Settings
  ('articles_per_page', '12', 'content', 'Number of articles displayed per page', true),
  ('faqs_per_page', '20', 'content', 'Number of FAQs displayed per page', true),
  ('enable_comments', 'false', 'content', 'Enable comments on articles', true),
  ('moderate_comments', 'true', 'content', 'Require comment moderation', false),
  ('enable_ratings', 'false', 'content', 'Enable article ratings', true),
  ('max_file_size', '10', 'content', 'Maximum file upload size in MB', false),
  ('allowed_file_types', '"jpg,jpeg,png,gif,pdf,doc,docx"', 'content', 'Allowed file upload types', false),
  
  -- Display Settings
  ('enable_dark_mode', 'true', 'display', 'Enable dark mode by default', true),
  ('primary_color', '"#00BFFF"', 'display', 'Primary brand color', true),
  ('secondary_color', '"#FFD700"', 'display', 'Secondary brand color', true),
  ('accent_color', '"#9333EA"', 'display', 'Accent color for highlights', true),
  ('show_author_bio', 'true', 'display', 'Show author bio on articles', true),
  ('show_publish_date', 'true', 'display', 'Show publication date on articles', true),
  ('show_read_time', 'true', 'display', 'Show estimated read time on articles', true),
  ('show_tags', 'true', 'display', 'Show tags on articles', true),
  ('show_related_articles', 'true', 'display', 'Show related articles section', true),
  
  -- API Settings (all private)
  ('supabase_url', '""', 'api', 'Supabase project URL', false),
  ('supabase_anon_key', '""', 'api', 'Supabase anonymous key', false),
  ('stripe_public_key', '""', 'api', 'Stripe publishable key', false),
  ('stripe_secret_key', '""', 'api', 'Stripe secret key', false)

ON CONFLICT (key) DO NOTHING;