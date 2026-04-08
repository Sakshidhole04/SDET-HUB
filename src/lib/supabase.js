import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://umarnjtvdyvxbeyuppkg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtYXJuanR2ZHl2eGJleXVwcGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2MjE3MzQsImV4cCI6MjA5MTE5NzczNH0.kLPolBGznij9A3W16XpfnMEm0DaJIhSBv8SI4u8ufA0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
