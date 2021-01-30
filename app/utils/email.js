/* eslint-disable no-unused-vars */
'use strict';
const nodemailer = require('nodemailer');
const getdata = require('../model/email');

async function sendEmail(ctx) {

  const email = await getdata();
  const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    service: 'qq',
    port: 587,
    secure: false,
    auth: {
      user: ctx.app.config.user,
      pass: ctx.app.config.pass,
    },
  });

  const mails = ctx.app.config.mails;
  const message = {
    from: `${ctx.app.config.form}<1793523411@qq.com>`,
    to: mails.join(','),
    ...email,
  };

  const sendHtml = await ctx.renderView('email/send-email.html', { message });

  const mailOptions = {

    from: message.from,

    to: message.to,

    subject: ctx.app.config.subject,

    html: sendHtml,
    // text: message.text,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    // ctx.logger.info('===send email result===', result);
    console.info(result);
  } catch (error) {
    // ctx.body = error;
    console.log(error);
    return;
  }
  //   ctx.body = sendHtml;

}

module.exports = function(ctx) {
  sendEmail(ctx);
};
