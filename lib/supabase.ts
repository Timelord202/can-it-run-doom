import { createClient } from '@supabase/supabase-js';

// NOTE: This should only be used in server actions
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);