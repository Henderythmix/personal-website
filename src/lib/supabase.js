import { createClient } from '@supabase/supabase-js';

//const process = import.meta;

console.log("Database URL: ", import.meta.env.VITE_SUPABASE_URL);

export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);