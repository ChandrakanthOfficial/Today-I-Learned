import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lrmdscxglapmyvpbzlgw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxybWRzY3hnbGFwbXl2cGJ6bGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ5MjU3NzcsImV4cCI6MTk5MDUwMTc3N30.pXdp6dCSgliHxiU-b5T7X45plfbbO6jMD_NmLYpN-8Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
