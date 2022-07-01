# User Stories for Food Ordering App

* Anyone can find restaurant information (address, hours, holiday hours, and store description) on the website bc I like to know about the restaurant. GET ('/about')

* Anyone can see the price, description, and an image of each menu item.

* As a guest, I can ONLY browse the menu. I CANNOT add menu items or place an order. Guest will HAVE to log in first to do those. Buttons for adding menu items and place order button should be greyed out and disabled.

* As a user, I can click my name (a la LightBnB) and see my name, phoe number, email, address, and payment info. It will also display my current order status (if true) as well as order history of previous orders. Date, order id, total, state. GET ('/user/:id')

* As a user, I can click a button to add a menu item and it gives me an option to set the quantity I want of that menu item which will update the menu item price in real time. 

* As a user, I can add multiple menu items to a single order.

* As a user, I can select the time of pickup.
  * Default set to NOW should be 45 mins after time of ordering
  * Set Specific time should be shown options in 30 min intervals only for available times in the day. 

* As a user, I can see my order total (display sub-total, taxes, total) and estimated time to pick up (or at a specified time)

* A user can just click place order button and order is confirmed

* As a user, Once I click place order button, I should see my screen update that order is placed. USER is free to create another order if he really wants to.

* As a user, Once order is confirmed, I will receive an SMS that my order is confirmed and that it will be ready in x time.

* As a restaurant, I can see a list of orders which displays the total amount and who ordered it, and can see whether it was completed or not.

* As a restaurant, If I click on an order, I can see the details of the order (date of order placement, menu items, subtotal, taxes, total, order id, customer id) as well as a Completed button to indicate it was picked up or cancel to back out to list of orders. 

## Stretch

* Ability for a guest to place an order without an account(user)

* Restaurant have options of the orders' state - confirmed, working, ready for pick up, completed.

* Restaurant can reject an order with an optional message which will send an SMS to the user or a guest.

* Users can add special instructers for EACH menu item.

* Users can edit the menu within 5 minutes of order placed. This should alert the restaurant or indicate on the browser that order is updated. 



