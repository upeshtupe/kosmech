// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://dpvbeyltsashgesorlwn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwdmJleWx0c2FzaGdlc29ybHduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMDU0OTcsImV4cCI6MjA2NTU4MTQ5N30.hDgkE05FZPx7apnVTxjoQZeU4u6lWhtulLqY_RAPW9Y";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);