/*
 # Create contact_submissions table
 
 1. New Tables
 - `contact_submissions`
 - `id` (uuid, primary key)
 - `name` (text, name of the person contacting)
 - `email` (text, email of the person contacting)
 - `subject` (text, subject of the message)
 - `message` (text, the message content)
 - `created_at` (timestamptz, when the submission was created)
 
 2. Security
 - Enable RLS on `contact_submissions` table
 - Add INSERT policy for anyone (unauthenticated + authenticated) to submit contact forms
 - Add SELECT policy for site owner (authenticated) to view submissions
 */
CREATE TABLE IF NOT EXISTS contact_submissions (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL,
    subject text NOT NULL DEFAULT '',
    message text NOT NULL,
    created_at timestamptz DEFAULT now()
);
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact form" ON contact_submissions FOR
INSERT TO anon,
    authenticated WITH CHECK (true);
CREATE POLICY "Authenticated users can view submissions" ON contact_submissions FOR
SELECT TO authenticated USING (true);