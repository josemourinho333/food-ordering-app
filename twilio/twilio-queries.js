// you will need to require this file inside where you want to use twilio

const { sms, to, from } = require('./sms');

const orderConfirmed = () => {
  sms.messages
    .create({
      body: 'Your order is confirmed 😊',
      to: to,
      from: from
    })
    .then((message) => {console.log(message)})
    .catch((error) => {console.log(error.message)});
};

const orderReady = () => {
  sms.messages
    .create({
      body: 'Your order is ready for pick up now! 😎',
      to: to,
      from: from
    })
    .then((message) => {console.log(message)})
    .catch((error) => {console.log(error.message)});
};

module.exports = {
  orderConfirmed,
  orderReady,
};
