DROP TABLE IF EXISTS menu_items CASCADE;

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price_per_item int,
  image_url TEXT,
  category VARCHAR(100) NOT NULL
);
