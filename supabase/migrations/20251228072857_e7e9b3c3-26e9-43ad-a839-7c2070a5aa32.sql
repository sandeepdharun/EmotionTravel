-- Create table to store travel signup preferences
CREATE TABLE IF NOT EXISTS public.travel_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  preferred_destination text,
  travel_style text,
  budget_range text,
  trip_length text,
  notes text,
  newsletter boolean DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.travel_signups ENABLE ROW LEVEL SECURITY;

-- Allow anyone (including unauthenticated users) to insert signups
CREATE POLICY "Anyone can create travel signups" 
ON public.travel_signups
FOR INSERT
TO anon
WITH CHECK (true);

-- Do NOT create a SELECT policy so signups are not publicly readable
