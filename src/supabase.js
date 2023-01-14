import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bmrkxzxnpnnauwhpukrg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtcmt4enhucG5uYXV3aHB1a3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxNzQyODcsImV4cCI6MTk4ODc1MDI4N30.bSnTq57-KnUPHL7eMQPiVk7s0ceiyKDyWynU60hQcB0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
