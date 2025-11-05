/*
  # Fix System Settings RLS Policies for Email Configuration

  1. Security Updates
    - Drop all existing policies to ensure clean state
    - Create comprehensive admin policies for all CRUD operations
    - Add proper role validation through profiles table
    - Ensure demo admin user exists for testing

  2. Policy Structure
    - Admin users can perform all operations on system_settings
    - Regular users can only read public settings
    - All policies check authentication and role properly

  3. Demo Account Setup
    - Ensures admin@r3alm.com exists with admin role
    - Provides fallback for demo functionality
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Admin can delete settings" ON system_settings;
DROP POLICY IF EXISTS "Admin can insert settings" ON system_settings;
DROP POLICY IF EXISTS "Admin can update settings" ON system_settings;
DROP POLICY IF EXISTS "Admin full read access" ON system_settings;
DROP POLICY IF EXISTS "Users can read public settings" ON system_settings;

-- Ensure RLS is enabled
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;

-- Create comprehensive admin policies
CREATE POLICY "Admins can read all system settings"
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

CREATE POLICY "Admins can insert system settings"
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

CREATE POLICY "Admins can update system settings"
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

CREATE POLICY "Admins can delete system settings"
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

-- Allow users to read public settings
CREATE POLICY "Users can read public system settings"
  ON system_settings
  FOR SELECT
  TO authenticated
  USING (is_public = true);

-- Ensure demo admin user exists
DO $$
DECLARE
  admin_user_id uuid;
BEGIN
  -- Check if admin@r3alm.com exists in auth.users
  SELECT id INTO admin_user_id 
  FROM auth.users 
  WHERE email = 'admin@r3alm.com' 
  LIMIT 1;
  
  -- If admin user exists, ensure they have admin profile
  IF admin_user_id IS NOT NULL THEN
    INSERT INTO profiles (id, email, name, role)
    VALUES (admin_user_id, 'admin@r3alm.com', 'Admin User', 'admin')
    ON CONFLICT (id) DO UPDATE SET
      role = 'admin',
      updated_at = now();
  END IF;
END $$;