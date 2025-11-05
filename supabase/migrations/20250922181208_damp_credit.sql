/*
  # Fix Admin Access to System Settings

  1. Security Updates
    - Drop existing problematic RLS policies
    - Create comprehensive admin policies for system_settings
    - Ensure admins can INSERT, UPDATE, DELETE system settings
    - Allow users to read public settings only

  2. Policy Structure
    - Admin full access (all CRUD operations)
    - User read-only access to public settings
    - Proper role checking through profiles table join

  3. Email Settings Focus
    - Specifically ensures email configuration can be saved
    - Handles both new settings creation and updates
*/

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Admins can read all settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can insert settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can update settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can delete settings" ON system_settings;
DROP POLICY IF EXISTS "Users can read public settings" ON system_settings;

-- Create comprehensive admin policies
CREATE POLICY "Admin full read access"
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

CREATE POLICY "Admin can insert settings"
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

CREATE POLICY "Admin can update settings"
  ON system_settings
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admin can delete settings"
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

-- Allow regular users to read public settings
CREATE POLICY "Users can read public settings"
  ON system_settings
  FOR SELECT
  TO authenticated
  USING (is_public = true);

-- Ensure RLS is enabled
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;

-- Verify admin user exists, if not create one from demo account
DO $$
BEGIN
  -- Check if admin user exists
  IF NOT EXISTS (
    SELECT 1 FROM profiles WHERE role = 'admin'
  ) THEN
    -- Create admin profile for demo account if it doesn't exist
    INSERT INTO profiles (id, email, name, role)
    VALUES (
      gen_random_uuid(),
      'admin@r3alm.com',
      'Admin User',
      'admin'
    )
    ON CONFLICT (email) DO UPDATE SET
      role = 'admin',
      name = 'Admin User';
  END IF;
END $$;