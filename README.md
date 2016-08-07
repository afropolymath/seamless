# Seamless
Don't have a computer with you? Send an e-mail via an SMS.

### Getting the service running
Getting this service up and running for your personal use is quick and easy. Since we are using [webtask](webtask.io) you don't need to provision an entire server to get it running.

- Clone the repo on your computer.
- Ensure you have a [Nexmo](http://nexmo.com) account, for SMS interacton, and a [Sendgrid](http://sendgrid.com) account, for e-mail interaction.
- Locate your Nexmo API key and secret. This will be used as `NEXMO_API_KEY` and `NEXMO_API_SECRET` respectively.
- Get your Sendgrid API key. This will be used as `SENDGRID_API_KEY`.
- Install webtask using `sudo npm install -g wt-cli`
- Initialize wt by running `wt init <YOUR_EMAIL_ADDRESS>`. A mail will be sent to you with a confirmation code.
- Run the service by running the following command:
```
wt create sender.webtask.js -s NEXMO_API_KEY=<YOUR_NEXMO_API_KEY>
                            -s NEXMO_API_SECRET=<YOUR_NEXMO_API_SECRET>
                            -s SENDGRID_API_KEY=<YOUR_SENDGRID_API_KEY>
```