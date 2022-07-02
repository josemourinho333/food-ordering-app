// Twilio client/connection set up

const twilio = require('twilio');
const { accountSid, authToken } = require('./twilio-setup');

const sms = new twilio(accountSid, authToken);
const to = '+16049964504';
const from = '+19804948591';

module.exports = {
  sms,
  to,
  from
};
