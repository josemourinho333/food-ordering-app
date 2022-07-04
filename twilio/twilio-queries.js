// you will need to require this file inside where you want to use twilio
const { sms, to, from } = require('./sms');

const orderConfirmed = (order, callback) => {

  const prepTime = 45;
  const ETA = order.order_placed;
  ETA.setMinutes(ETA.getMinutes() + 45);
  const etaHr = ETA.getHours();
  const etaMin = ETA.getMinutes();

  sms.messages
    .create({
      body: `Hi ${order.id},

      your order is confirmed and will be ready in ${prepTime} minutes at ${(etaHr > 12) ? etaHr - 12 : etaHr}:${etaMin} ${(etaHr > 12) ? 'PM' : 'AM'}. 😊`,
      to: to,
      from: from
    })
    .then((message) => {console.log(message)})
    .then(callback(order))
    .catch((error) => {console.log(error.message)});
};

const orderReady = (order) => {
  sms.messages
    .create({
      body: `Your order #${order.id} is ready for pick up, thank you! 😎`,
      to: to,
      from: from
    })
    .then((message) => {console.log(message)})
    .catch((error) => {console.log(error.message)});
};

const newOrder = (order) => {
  console.log('**** Inside newOrder ****');
  console.log('you can see order', order);
  sms.messages
    .create({
      body: `New order came in. Reply to confirm the order and let the customer know when their order will be ready.`,
      to: to,
      from: from
    })
    .then((message) => {console.log(message)})
    .catch((error) => {console.log(error.message)});
};

module.exports = {
  orderConfirmed,
  orderReady,
  newOrder,
};
