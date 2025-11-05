/*
  # Fix waitlist signups RLS policy

  1. Security Changes
    - Drop existing restrictive INSERT policy
    - Create new policy allowing anonymous users to insert waitlist signups
    - Maintain existing SELECT policies for admins and users
*/

-- Drop the existing INSERT policy that's causing issues
DROP POLICY IF EXISTS "Anyone can signup for waitlist" ON waitlist_signups;

-- Create a new INSERT policy that properly allows anonymous users
CREATE POLICY "Allow anonymous waitlist signups"
  ON waitlist_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);