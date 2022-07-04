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
    ('Classic Burger', 'Classic Burger with Delicious Homemade Beef Patty of 200 gm, Tomato, Lettuce, Red Onion and Ridiculous Sauce.', '800', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/calssic.jpg'),
    ('Cheese Burger', 'Classic Cheeseburger. 100% homemade Beef Patty, Mozzarella Cheese, Red Onion, Tomato, and Ridiculous Sauce.', '850', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/cheese.jpg'),
    ('Chicken Burger', 'Chicken Fillet, Red Onion, Lettuce, Balsamic Onion and Tomato with Grilled Vegetable Alioli ... In The Best Mediterranean Style !!', '1020', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/chicken.jpg'),
    ('Salmon Burger', 'Top Quality Salmon Topped with Fresh Cucumber, Avocado, Lettuce, Red Onions and Dill Alioli.', '990', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/salmon3.jpg'),
    ('Hawaiian Burger', 'Meat Patty or Chicken Fillet to Choose with a Delicious Slice of Caramelized Pineapple, Lettuce, Tomato, Red Onions, topped with Onions Rings and Mango Alioli.', '1100', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/hawaiian.jpg'),
    ('Tuna Burger', 'Fresh Yellow Fin Tuna, Avocado, Lettuce, Red Onion, Tomato and our Asian Alioli Based on Soy and Tahini', '920', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/tuna.jpg'),
    ('Texas Burger', 'Angus Beef Torta, Onion Rings, Bacon, American Cheese, Lettuce, Tomato, Red Onion and Siracha Alioli', '1400', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/texas.jpg'),
    ('Mexican Burger', 'Beef Patty, American Cheese, Guacamole, Pico de Gallo, Spacy Doritos, Lettuce, Tomato, Red Onions and Chipotle Sauce', '1320', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/mexican1.jpg'),
    ('Buffalo Burger', 'Excepcional Buffalo Patty, Caramelized Onions, Lettuce, Tomato, Red Onions, Mozzarella Cheese and Home-Made Alioli', '1450', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/buffalo.jpg'),
    ('Not So Burger', 'Low Carb and Gluten Free, Choose Lean Beef Patty or Chicken Fillet, Mozarrella Cheese, Cucumber, Red Onion in Vinaigrette, Tomato, Wrapped in Fresh Lettuce', '1170', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/notburger.jpg'),
    ('The King Burger', 'High Quality Premium Rib Eye Burger ( 250Gr) of the Best Quality!!!Cooked on The Grill, with melted Mozarrella Chesse, Onion Rings, Lettuce, Tomato, Red Onions, Sauteed Onions, Red Peppers, Mushrooms, Marinated with Original Steak Sauce and Roastd Vegetables Alioli', '1990', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/king.jpg'),
    ('Lamb Burger', 'Lamb Patty, Mozarrella Cheese, Mint Jelly, Lettuce, Tomato, Red Onions, Red Peppers, Sautéed Onions and Ridiculous Alioli', '1700', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/lamb.jpg'),
    ('Bomb Burger', 'Delicious Beef Patty with Special Cheeses, That Deliver and Explosion of Secret and Unique Flavor!! Wrapped in Bacon, with Tomato, Lettuce, Red Onions and Ridiculous Alioli', '1750', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/bomb.jpg'),
    ('French Fries', 'Choose your favourite side to burger', '170', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/fries.jpg'),
    ('Onion Rings', 'Choose your favourite side to burger', '210', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/onionrings.jpg'),
    ('Sweet Potato Fries', 'Choose your favourite side to burger', '190', 'https://github.com/josemourinho333/food-ordering-app/blob/queries/db/seeds/image/sweetpotato.jpg');



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


