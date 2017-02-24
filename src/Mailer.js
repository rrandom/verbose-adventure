const nodemailer = require('nodemailer');

class Mailer {

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.AUTH_SERVICE,
      auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS,
      },
    });
  }

  send(subject, content) {
    const mailOptions = {
      from: `"The Ghost! 👻" <${process.env.AUTH_USER}>`,
      to: process.env.SEND_TO,
      subject,
      text: 'plan text',
      html: content,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
    });
  }

}

module.exports = Mailer;
