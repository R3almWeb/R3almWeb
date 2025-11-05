/*
  # Allow anonymous waitlist signups

  1. Security Changes
    - Drop existing restrictive policies
    - Create simple policy allowing anonymous inserts
    - Maintain admin access for management
    
  2. Policy Details
    - Allow INSERT for anon and authenticated users
    - Allow SELECT for admins and editors only
    - Allow UPDATE/DELETE for admins and editors only
*/

-- Drop existing policies that might be blocking inserts
DROP POLICY IF EXISTS "Anyone can signup for waitlist" ON waitlist_signups;
DROP POLICY IF EXISTS "Allow anonymous waitlist signups" ON waitlist_signups;
DROP POLICY IF EXISTS "Admins can read all signups" ON waitlist_signups;
DROP POLICY IF EXISTS "Admins can update signups" ON waitlist_signups;
DROP POLICY IF EXISTS "Admins can delete signups" ON waitlist_signups;
DROP POLICY IF EXISTS "Users can read their own signups" ON waitlist_signups;

-- Create new simple policies
CREATE POLICY "Enable insert for anonymous users" ON waitlist_signups
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Enable read for admins" ON waitlist_signups
  FOR SELECT 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Enable update for admins" ON waitlist_signups
  FOR UPDATE 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role IN ('admin', 'editor')
    )
  );

CREATE POLICY "Enable delete for admins" ON waitlist_signups
  FOR DELETE 
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role IN ('admin', 'editor')
    )
  );