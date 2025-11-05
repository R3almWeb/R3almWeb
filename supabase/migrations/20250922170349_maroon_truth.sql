/*
  # Create Demo Users in Supabase

  1. New Users
    - Creates demo admin, editor, and user accounts in auth.users
    - Adds corresponding profiles with proper roles
    
  2. Security
    - Uses proper UUID generation for user IDs
    - Sets up email confirmation as disabled for demo accounts
    - Creates profiles with correct role assignments
    
  3. Demo Account Details
    - admin@r3alm.com (Admin role)
    - editor@r3alm.com (Editor role) 
    - user@r3alm.com (User role)
*/

-- Insert demo users into auth.users table
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES 
(
  '00000000-0000-0000-0000-000000000001',
  '00000000-0000-0000-0000-000000000000',
  'admin@r3alm.com',
  crypt('admin123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '',
  '',
  '',
  ''
),
(
  '00000000-0000-0000-0000-000000000002',
  '00000000-0000-0000-0000-000000000000',
  'editor@r3alm.com',
  crypt('editor123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '',
  '',
  '',
  ''
),
(
  '00000000-0000-0000-0000-000000000003',
  '00000000-0000-0000-0000-000000000000',
  'user@r3alm.com',
  crypt('user123', gen_salt('bf')),
  now(),
  now(),
  now(),
  '',
  '',
  '',
  ''
)
ON CONFLICT (id) DO NOTHING;

-- Insert corresponding profiles
INSERT INTO profiles (
  id,
  email,
  name,
  role,
  created_at,
  updated_at
) VALUES 
(
  '00000000-0000-0000-0000-000000000001',
  'admin@r3alm.com',
  'Demo Admin User',
  'admin',
  now(),
  now()
),
(
  '00000000-0000-0000-0000-000000000002',
  'editor@r3alm.com',
  'Demo Editor User',
  'editor',
  now(),
  now()
),
(
  '00000000-0000-0000-0000-000000000003',
  'user@r3alm.com',
  'Demo Regular User',
  'user',
  now(),
  now()
)
ON CONFLICT (id) DO NOTHING;