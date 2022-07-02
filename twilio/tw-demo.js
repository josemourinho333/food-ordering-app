// what you need to do to start using twilio functions
const sms = require('./sms');



sms.messages.create(
  {
    body: 'hello from node',
    to: to,
    from: from,
  }
)
.then((message) => { console.log(message)});
