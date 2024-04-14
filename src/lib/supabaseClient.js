import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ayjiwquubzcrvohhdhiw.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5aml3cXV1YnpjcnZvaGhkaGl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwMzgwNTYsImV4cCI6MjAyODYxNDA1Nn0.u9BjBuPZY7-5asiX1QWF6lTAUxzybVdQLSlRDsqwoa0"
export const supabase = createClient(supabaseUrl, supabaseKey)

export const insertPost = async (title, description, expiration, lat, long) => {
    const { error } = await supabase
        .from("posts")
        .insert({ title, description, expiration, latitude: lat, longitude: long });
};

export const fetchPosts = async () => {
    const { data, error } = await supabase
        .from("posts")
        .select()
    return data;
};