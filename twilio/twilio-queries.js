// you will need to require this file inside where you want to use twilio
const { sms, to, from } = require('./sms');

const orderConfirmed = (ETA, callback) => {

  sms.messages
    .create({
      body: `Hi there,

      your order is confirmed and will be ready in ${ETA} minutes. 😊`,
      // body: `Hi ${order.id},

      // your order is confirmed and will be ready in ${prepTime} minutes at ${(etaHr > 12) ? etaHr - 12 : etaHr}:${etaMin} ${(etaHr > 12) ? 'PM' : 'AM'}. 😊`,
      to: to,
      from: from
    })
    .then((message) => {console.log(message)})
    .then(callback(ETA))
    .catch((error) => {console.log(error.message)});
};

// const orderReady = (order) => {
//   sms.messages
//     .create({
//       body: `Your order #${order.id} is ready for pick up, thank you! 😎`,
//       to: to,
//       from: from
//     })
//     .then((message) => {console.log(message)})
//     .catch((error) => {console.log(error.message)});
// };

const newOrder = (order) => {
    return sms.messages
    .create({
      body: `New order #${order} came in. Reply to confirm the order and let the customer know when their order will be ready.`,
      to: to,
      from: from
    })
    .then((message) => {
      console.log(message)
      return order;
    })
    .catch((error) => {console.log(error.message)});
};

module.exports = {
  orderConfirmed,
  newOrder,
};
