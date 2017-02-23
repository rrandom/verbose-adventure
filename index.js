'use strict';

const nodemailer = require('nodemailer');

require('dotenv').config();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: process.env.AUTH_SERVICE,
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: `"The Ghost! 👻" <${process.env.AUTH_USER}>`, // sender address
    to: process.env.SEND_TO, // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});