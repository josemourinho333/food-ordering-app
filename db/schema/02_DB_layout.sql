DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  is_admin BOOLEAN NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  street_address VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  photo_url TEXT NOT NULL
);

-- currently not used
-- CREATE TABLE menu (
-- menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
-- );


CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  status_sent BOOLEAN NOT NULL DEFAULT false,
  status_finished BOOLEAN NOT NULL DEFAULT false,
  time_sent TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  time_confirmed TIMESTAMP DEFAULT CURRENT_TIMESTAMP + INTERVAL '10 minutes',
  -- time_fulfilled not used currently
  -- time_fulfilled TIMESTAMP NOT NULL,
  time_of_pickup TIMESTAMP DEFAULT CURRENT_TIMESTAMP + INTERVAL '45 minutes'
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL
 );

