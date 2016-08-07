# Seamless
Don't have a computer with you? Send an e-mail via an SMS.

### Using the service
Getting this service up and running for your personal use is quick and easy. It has been configured to use Auth0 Webtask and so you don't need to provision an entire server to get it running.

- Clone the repo on your computer.
- Ensure you have a [Nexmo](http://nexmo.com) account for SMS interacton and a [Sendgrid](http://sendgrid.com) account for e-mail interaction.
- Locate your Nexmo API key and secret.
- Get your Sendgrid API key.
- Install Webtask using `sudo npm install -g wt-cli`
- Initialize wt by running `wt init <YOUR_EMAIL_ADDRESS>`. A mail gets sent to you with a confirmation code.
- Run the service by running `wt create sender.webtask.js`