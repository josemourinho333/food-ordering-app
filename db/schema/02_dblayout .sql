DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS total_orders CASCADE;
DROP TABLE IF EXISTS order_items CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  is_admin BOOLEAN NOT NULL
  phone_number VARCHAR(255) NOT NULL
  email VARCHAR(255) NOT NULL,
  street_address VARCHAR(255) NOT NULL
  province VARCHAR(255) NOT NULL
  country VARCHAR(255) NOT NULL
  postal_code VARCHAR(255) NOT NULL
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  photo_url VARCHAR(255) NOT NULL,
);

-- currently not used
-- CREATE TABLE menu (
-- menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
-- );


CREATE TABLE total_orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  status_sent boolean NOT NULL,
  status_finished boolean NOT NULL,
  time_sent DATE NOT NULL,
  time_confirmed DATE NOT NULL,
  time_fulfilled DATE NOT NULL,
  time_of_pickup DATE NOT NULL,
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY NOT NULL,
  total_order_id INTEGER REFERENCES total_orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL
 );


