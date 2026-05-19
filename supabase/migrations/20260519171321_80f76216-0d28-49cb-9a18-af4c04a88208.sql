CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  country text,
  company text,
  product_interest text,
  message text,
  payload jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can submit a lead"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX leads_source_idx ON public.leads (source);