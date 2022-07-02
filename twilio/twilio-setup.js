// Twilio set up info in a separate file
const twilioParams = {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN
};

module.exports = { twilioParams };
