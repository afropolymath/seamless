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

### Using the Service

To use the service, buy a new number on Nexmo in any country of your choice. You might also need to buy some credits for the status messages that get sent to you. Costs are as low as EUR 0.0057 per message and EUR 0.67 per number per month.

Click the number to reveal it's settings. In the callback URL field, add the webtask URL that was generated when you ran the service.

That's it. The service has been setup. Feel free to send an email message to your phone number whenever you don't have access to the internet.

*Message Format*

Ensure to begin the message you're sending with the e-mail address you're trying to send the message to.

```
<EMAIL_ADDRESS> MESSAGE_BODY
```

Now you won't feel stuck whenever you don't have internet.