import nodemailer from 'nodemailer';
import emailTemplate from './emailTemplate';

// async..await is not allowed in global scope, must use a wrapper
export async function Mailer(name: string, email: string, textarea: string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'mail.gandi.net',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: import.meta.env.VITE_EMAIL, // generated ethereal user
      pass: import.meta.env.VITE_PW, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"relay" <relay@smithauto.us>`, // sender address
    to: import.meta.env.VITE_EMAIL, // list of receivers
    subject: 'HOLESHOT ELECTRIC CUSTOMER', // Subject line
    html: emailTemplate(name, email, textarea), // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
