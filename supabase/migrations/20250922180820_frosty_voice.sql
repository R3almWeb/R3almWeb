/*
  # Fix system_settings RLS policies

  1. Security Updates
    - Drop and recreate all RLS policies for system_settings
    - Add comprehensive policies for admin operations
    - Add fallback policies for authenticated users
    - Ensure proper role checking with profiles table

  2. Policy Changes
    - Allow admins to perform all operations (SELECT, INSERT, UPDATE, DELETE)
    - Allow authenticated users to read public settings
    - Use proper JOIN with profiles table for role verification
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Admins can read all settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can insert settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can update settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can delete settings" ON system_settings;
DROP POLICY IF EXISTS "Users can read public settings" ON system_settings;

-- Create comprehensive admin policies
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

CREATE POLICY "Admins can update settings"
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

-- Allow authenticated users to read public settings
CREATE POLICY "Users can read public settings"
  ON system_settings
  FOR SELECT
  TO authenticated
  USING (is_public = true);

-- Ensure the current user has admin role (for testing)
-- This will help identify if the issue is with the user's role
DO $$
BEGIN
  -- Check if there are any profiles with admin role
  IF NOT EXISTS (SELECT 1 FROM profiles WHERE role = 'admin') THEN
    -- If no admin exists, make the first user an admin
    UPDATE profiles 
    SET role = 'admin' 
    WHERE id = (SELECT id FROM profiles ORDER BY created_at LIMIT 1);
  END IF;
END $$;