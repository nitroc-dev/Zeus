-- Projects
CREATE TABLE IF NOT EXISTS projects (
  id               text PRIMARY KEY,
  name_en          text NOT NULL,
  name_fr          text NOT NULL,
  description_en   text NOT NULL,
  description_fr   text NOT NULL,
  long_description_en text,
  long_description_fr text,
  content_en       text,
  content_fr       text,
  image_url        text,
  repository_url   text,
  website_url      text,
  tags             text[],
  highlights       text[],
  year             text,
  status           text CHECK (status IN ('live', 'in_progress', 'archived')),
  role             text,
  is_featured      boolean NOT NULL DEFAULT false,
  lighthouse_score text,
  timeline         text,
  version          text,
  category         text,
  seo_title        text,
  seo_description  text,
  created_at       timestamptz NOT NULL DEFAULT now()
);

-- Tech stack items linked to a project
CREATE TABLE IF NOT EXISTS tech_stack (
  id         serial PRIMARY KEY,
  project_id text NOT NULL REFERENCES projects (id) ON DELETE CASCADE,
  name       text NOT NULL,
  reason_en  text NOT NULL DEFAULT '',
  reason_fr  text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0
);

-- Skill categories
CREATE TABLE IF NOT EXISTS skills (
  id           text PRIMARY KEY,
  label_en     text NOT NULL,
  label_fr     text NOT NULL,
  technologies text[] NOT NULL DEFAULT '{}',
  sort_order   integer NOT NULL DEFAULT 0
);

-- Work / education experiences
CREATE TABLE IF NOT EXISTS experiences (
  id              text PRIMARY KEY,
  name_en         text NOT NULL,
  name_fr         text NOT NULL,
  company_name    text NOT NULL,
  description_en  text NOT NULL,
  description_fr  text NOT NULL,
  start_date      date NOT NULL,
  end_date        date,
  location_en     text NOT NULL DEFAULT '',
  location_fr     text NOT NULL DEFAULT '',
  experience_type text CHECK (experience_type IN ('work', 'education', 'internship')),
  website_url     text
);

-- Row-level security (public read, no anonymous writes)
ALTER TABLE projects    ENABLE ROW LEVEL SECURITY;
ALTER TABLE tech_stack  ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills      ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read" ON projects    FOR SELECT USING (true);
CREATE POLICY "public read" ON tech_stack  FOR SELECT USING (true);
CREATE POLICY "public read" ON skills      FOR SELECT USING (true);
CREATE POLICY "public read" ON experiences FOR SELECT USING (true);
