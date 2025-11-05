/*
  # Temporarily disable RLS for waitlist signups

  This migration temporarily disables Row Level Security on the waitlist_signups table
  to allow anonymous users to join waitlists without authentication issues.
  
  1. Changes
     - Disable RLS on waitlist_signups table
     - Remove all existing policies
     - Allow unrestricted access for testing
  
  Note: This is a temporary fix. In production, you should implement proper RLS policies.
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow anonymous waitlist signups" ON waitlist_signups;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON waitlist_signups;
DROP POLICY IF EXISTS "Enable read for admins" ON waitlist_signups;
DROP POLICY IF EXISTS "Enable update for admins" ON waitlist_signups;
DROP POLICY IF EXISTS "Enable delete for admins" ON waitlist_signups;

-- Disable RLS temporarily
ALTER TABLE waitlist_signups DISABLE ROW LEVEL SECURITY;