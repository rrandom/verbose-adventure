
require('dotenv').config();

const Mailer = require('./src/Mailer');

const mailer = new Mailer();

mailer.send('Hello', '<b>Hello world ?</b>');
