var r = require('superagent@1.2.0');
var Sendgrid = require('sendgrid@1.8.0');
var helper = Sendgrid.mail;

module.exports = function (done) {
  var NEXMO_SMS_API_BASE_URL = 'https://rest.nexmo.com/sms/json';
  var msisdn = ctx.data.msisdn;
  var message = ctx.data.text;
  var nexmoApiKey = ctx.secrets.NEXMO_API_KEY;
  var nexmoApiSecret = ctx.secrets.NEXMO_API_SECRET;
  var sendgridApiKey = ctx.secrets.SENDGRID_API_KEY;
  
  // Valid users dictionary
  var validUsers = {
    '2348132656830': {
      'email': 'chidiebere.nnadi@gmail.com',
      'name': 'Chidiebere I. Nnadi'
    }
  };

  // Sends feedback to user on certain actions
  var sendFeedback(message, msisdn, cb) {
    r
      .get(NEXMO_SMS_API_BASE_URL)
      .query({
        api_key: nexmoApiKey,
        api_secret: nexmoApiSecret,
        from: 'Seamless',
        to: msisdn,
        text: message
      })
      .end(function(err, res) {
        if(err)
          cb(err);
        cb(null, "Success!");
      });
  }

  // Send feedback if the users number is not registered
  if(!msisdn in validUsers) {
    sendFeedback("Your number is not registered for this service.", msisdn, done);
  }
  else {
    var subject = 'Seamless Message from ' + msisdn + ' ('+ name +')';

    from_email = new helper.Email(validUsers[msisdn].email);
    to_email = message.split(" ")[0];

    var re = /^\w+(\.\w+)*@\w+(\.\w+)+$/;
    var isValid = re.exec(to_email);
    
    // Send feedback if e-mail address supplied is not valid
    if(!isValid) {
      sendFeedback("The e-mail address you entered was invalid.", msisdn, done);
    }
    else {
      to_email = new helper.Email(to_email);

      message = message.replace(/^\w+(\.\w+)*@\w+(\.\w+)+/, "").trim();
      content = new helper.Content('text/plain', message);
      
      mail = new helper.Mail(from_email, subject, to_email, content);
      
      sg = SendGrid(sendgridApiKey);
      
      // Create the Sendgrid request
      var sgRequest = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
      });

      // Make the Sendgrid request
      sg.API(sgRequest, function(error, response) {
        if(error) {
          sendFeedback("Your message not sent for some reason!", msisdn, function() {
            done(err);
          })
        }
        else {
          sendFeedback("Your message was sent successfully!", msisdn, done);
        }
      });
    }
  }
}