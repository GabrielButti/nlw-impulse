import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f9e68af3f4444d",
    pass: "06d20da01aec4b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {    
    await transport.sendMail({
      from: 'Equipe Feedged <oi@feedget.com>',
      to: 'Gabriel Butti <gabriel.butti@hotmail.com>',
      subject, 
      html: body,
    })
  };
}