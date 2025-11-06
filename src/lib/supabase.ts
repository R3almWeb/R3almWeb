// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// === Environment Variables (Vite format) ===
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// === Validation: Prevent runtime crashes ===
if (!supabaseUrl) {
  throw new Error(
    'VITE_SUPABASE_URL is missing. Add it to your .env file:\n' +
    'VITE_SUPABASE_URL=https://your-project.supabase.co'
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    'VITE_SUPABASE_ANON_KEY is missing. Add it to your .env file:\n' +
    'VITE_SUPABASE_ANON_KEY=your-anon-public-key'
  );
}

// === Create and Export Supabase Client ===
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// === Optional: Debug in Development ===
if (import.meta.env.DEV) {
  console.log('Supabase client initialized:', { supabaseUrl });
  // You can test connection here if needed
}