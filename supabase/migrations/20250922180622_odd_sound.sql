/*
  # Fix system_settings RLS policies

  1. Security Updates
    - Add missing INSERT policy for admins
    - Fix UPDATE policy for admins
    - Ensure proper permissions for system_settings table

  2. Changes
    - Allow admins to insert new settings
    - Allow admins to update existing settings
    - Maintain read permissions for admins and public settings
*/

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Admins can insert settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can update all settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can read all settings" ON system_settings;
DROP POLICY IF EXISTS "Users can read public settings" ON system_settings;
DROP POLICY IF EXISTS "Admins can delete settings" ON system_settings;

-- Create comprehensive RLS policies for system_settings
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

CREATE POLICY "Users can read public settings"
  ON system_settings
  FOR SELECT
  TO authenticated
  USING (is_public = true);

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