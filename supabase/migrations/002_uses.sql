-- Uses sections (Hardware, Editor, Software, Dev Stack)
CREATE TABLE IF NOT EXISTS uses_sections (
  id         text PRIMARY KEY,
  icon       text NOT NULL,
  title_en   text NOT NULL,
  title_fr   text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0
);

-- Individual items within a section
CREATE TABLE IF NOT EXISTS uses_items (
  id         serial PRIMARY KEY,
  section_id text NOT NULL REFERENCES uses_sections (id) ON DELETE CASCADE,
  name       text NOT NULL,
  sub        text NOT NULL DEFAULT '',
  why_en     text NOT NULL DEFAULT '',
  why_fr     text NOT NULL DEFAULT '',
  sort_order integer NOT NULL DEFAULT 0
);

ALTER TABLE uses_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE uses_items    ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read" ON uses_sections FOR SELECT USING (true);
CREATE POLICY "public read" ON uses_items    FOR SELECT USING (true);
