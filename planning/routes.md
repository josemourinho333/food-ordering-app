### Routes/BREAD/REST

# Orders for customers
B don't need 

R GET /orders/:id (see your current order status)

E don't need for now

A POST /orders (inside this request, we add twilio)

D don't need this

# Orders for owner
B GET /admin/orders (if admin) - displays all orders.

R GET /orders/:id (see your current order status
if admin you have special button)

E POST /orders/:id (only for admin that admin can click the button to mark order complete)

A we don't need this for admin

D maybe for stretch

# Menu/Menu Items
B GET     /menu-items (displays available menus)

R no need for now

E no need for now

A no need for now

D no need for now

"if boolean admin? true - redirect app.com/admin"

# Users 

B GET   /users (possibly don't need for now)

R GET   /users/:id (see your account info)

E POST  /users/:id (edit account info)

A POST  /users (signup)

D POST  /users/:id/delete (don't need for now)


Tomorow - talk out dividing work

