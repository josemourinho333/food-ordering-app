SET timezone = 'America/Los_Angeles';
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
    ('Classic Burger', 'Classic Burger with Delicious Homemade Beef Patty of 200 gm, Tomato, Lettuce, Red Onion and Ridiculous Sauce.', '800', 'https://i.ibb.co/8P7vZZB/calssic.jpg'),
    ('Cheese Burger', 'Classic Cheeseburger. 100% homemade Beef Patty, Mozzarella Cheese, Red Onion, Tomato, and Ridiculous Sauce.', '850', 'https://i.ibb.co/ssDsrXx/cheese.jpg'),
    ('Chicken Burger', 'Chicken Fillet, Red Onion, Lettuce, Balsamic Onion and Tomato with Grilled Vegetable Alioli ... In The Best Mediterranean Style !!', '1020', 'https://i.ibb.co/h8qFXND/chicken.jpg'),
    ('Salmon Burger', 'Top Quality Salmon Topped with Fresh Cucumber, Avocado, Lettuce, Red Onions and Dill Alioli.', '990', 'https://i.ibb.co/Jj1ZH6S/salmon3.jpg'),
    ('Hawaiian Burger', 'Meat Patty or Chicken Fillet to Choose with a Delicious Slice of Caramelized Pineapple, Lettuce, Tomato, Red Onions, topped with Onions Rings and Mango Alioli.', '1100', 'https://i.ibb.co/TLSsncC/hawaiian.jpg'),
    ('Tuna Burger', 'Fresh Yellow Fin Tuna, Avocado, Lettuce, Red Onion, Tomato and our Asian Alioli Based on Soy and Tahini', '920', 'https://i.ibb.co/KVzpWtY/tuna.jpg'),
    ('Texas Burger', 'Angus Beef Torta, Onion Rings, Bacon, American Cheese, Lettuce, Tomato, Red Onion and Siracha Alioli', '1400', 'https://i.ibb.co/2dxGcsQ/texas.jpg'),
    ('Mexican Burger', 'Beef Patty, American Cheese, Guacamole, Pico de Gallo, Spacy Doritos, Lettuce, Tomato, Red Onions and Chipotle Sauce', '1320', 'https://i.ibb.co/fCrR1bf/mexican1.jpg'),
    ('Buffalo Burger', 'Excepcional Buffalo Patty, Caramelized Onions, Lettuce, Tomato, Red Onions, Mozzarella Cheese and Home-Made Alioli', '1450', 'https://i.ibb.co/FxgMMzH/buffalo.jpg'),
    ('Not So Burger', 'Low Carb and Gluten Free, Choose Lean Beef Patty or Chicken Fillet, Mozarrella Cheese, Cucumber, Red Onion in Vinaigrette, Tomato, Wrapped in Fresh Lettuce', '1170', 'https://i.ibb.co/qB65pHT/notburger.jpg'),
    ('The King Burger', 'High Quality Premium Rib Eye Burger ( 250Gr) of the Best Quality!!!Cooked on The Grill, with melted Mozarrella Chesse, Onion Rings, Lettuce, Tomato, Red Onions, Sauteed Onions, Red Peppers, Mushrooms, Marinated with Original Steak Sauce and Roastd Vegetables Alioli', '1990', 'https://i.ibb.co/XzVMzRX/king.jpg'),
    ('Lamb Burger', 'Lamb Patty, Mozarrella Cheese, Mint Jelly, Lettuce, Tomato, Red Onions, Red Peppers, Sautéed Onions and Ridiculous Alioli', '1700', 'https://i.ibb.co/8nw09cc/lamb.jpg'),
    ('Bomb Burger', 'Delicious Beef Patty with Special Cheeses, That Deliver and Explosion of Secret and Unique Flavor!! Wrapped in Bacon, with Tomato, Lettuce, Red Onions and Ridiculous Alioli', '1750', 'https://i.ibb.co/gjVH5Z9/bomb.jpg'),
    ('French Fries', 'Add French Fries to your burger', '170', 'https://i.ibb.co/rd89NNX/fries.jpg'),
    ('Onion Rings', 'Add Onion Rings to your burger', '210', 'https://i.ibb.co/BfPKyXp/onionrings.jpg'),
    ('Sweet Potato Fries', 'Add Sweet Potato Fries to your burger', '190', 'https://i.ibb.co/ZG290nv/sweetpotato.jpg');

INSERT INTO orders (
    user_id, status_sent, status_finished, time_sent, time_confirmed, time_of_pickup )
    VALUES
    ( '1', true, true, CURRENT_TIMESTAMP - interval '23 hours', CURRENT_TIMESTAMP - interval '22 hours', CURRENT_TIMESTAMP - interval '21 hours' ),
    ( '2', true, true, CURRENT_TIMESTAMP , CURRENT_TIMESTAMP + interval '1 hours', CURRENT_TIMESTAMP + interval '2 hours' ),
    ( '5', true, true, CURRENT_TIMESTAMP + interval '1 hours', CURRENT_TIMESTAMP + interval '2 hours', CURRENT_TIMESTAMP + interval '3 hours' ),
    ( '3', true, false, CURRENT_TIMESTAMP + interval '2 hours', NULL, NULL ),
    ( '1', true, false, CURRENT_TIMESTAMP + interval '3 hours', NULL, NULL  ),
    ( '4', true, false, CURRENT_TIMESTAMP + interval '4 hours', NULL, NULL  ),
    ( '3', false, false, CURRENT_TIMESTAMP + interval '6 hours', NULL, NULL);



INSERT INTO order_items ( order_id, menu_item_id, quantity)
 VALUES
 ( '1', '2', '1'),
 ( '1', '2', '1'),
 ( '2', '3', '3'),
 ( '2', '8', '1'),
 ( '3', '7', '2'),
 ( '4', '7', '3'),
 ( '6', '4', '1'),
 ( '6', '5', '3'),
 ( '3', '11', '1'),
 ( '4', '8', '2'),
 ( '7', '10', '3'),
 ( '5', '1', '1'),
 ( '6', '10', '3'),
 ( '3', '8', '1'),
 ( '4', '8', '2'),
 ( '7', '10', '3'),
 ( '7', '12', '1');


