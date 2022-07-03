INSERT INTO users (name, is_admin, phone_number, email, street_address, province, country, postal_code)
VALUES
  ('Brennan Padilla','false','1-279-271-5628','ectus.quis@icloud.com','Ap #287-6384 Eu St.','Prince Edward Island','Canada','61C 5H7'),
  ('Belle Hendrick','true','1-334-375-1547','quis@hotmail.couk','177-3446 Donec St.','Quebec','Canada','T8P 8G7'),
  ('Vance Melton','false','(881) 663-0046','lorem@protonmail.com','Ap #243-9390 Erat, St.','Quebec','Canada','Q5B 0E9'),
  ('Aquila Francis','false','1-482-761-0678','lorem.vitae@google.com','904-7492 Aliquam Avenue','New Brunswick','Canada','25T 0P1'),
  ('Amanda Garner','false','(390) 131-1912','nam@aol.couk','Ap #566-6841 Pretium Av.','New Brunswick','Canada','L3K 2Y3');

    INSERT INTO menu_items (
    name, description, price, photo_url)
    VALUES
    ('Burger 1', 'Lorem Ipsum', '1000', 'data:image/png'),
    ('Burger 2', 'Lorem Ipsum2', '1500', 'data:image/jpeg'),
    ('Burger 4', 'Lorem Ipsum4', '2500', 'data:image/jpeg'),
    ('Burger 5', 'Lorem Ipsum5', '3000', 'data:image/png');



INSERT INTO orders (
    user_id)
    VALUES
    ( '1'),
    ( '2'),
    ( '2'),
    ( '3'),
    ( '4'),
    ( '3'),
    ( '1');



INSERT INTO order_items ( order_id, menu_item_id, quantity)
 VALUES
 ( '1', '2', '1'),
 ( '1', '2', '1'),
 ( '2', '3', '3'),
 ( '3', '4', '1'),
 ( '4', '2', '2'),
 ( '3', '1', '3'),
 ( '1', '1', '1');



