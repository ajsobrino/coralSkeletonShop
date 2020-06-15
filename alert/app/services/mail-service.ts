import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export default class MailService {

    static instance: MailService
    email: string = 'ajsobrinodeveloper@gmail.com';
    password: string = 'aj071696';
    static mail: Mail;
    constructor() {
        MailService.mail = createTransport({
            service: 'gmail',
            port: 567,
            auth: {
                user: this.email,
                pass: this.password
            }
        });
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new MailService();
        }
        return this.instance;
    }

     sendEmail = (toEmail: string, subject: string, text: string) => {
        let mailOptions = {
            from: this.email,
            to: toEmail,
            subject: subject,
            text: text
        }

        MailService.mail.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    };

    sendEmailHtml = (toEmail: string, subject: string, text: string) => {
        let mailOptions = {
            from: this.email,
            to: toEmail,
            subject: subject,
            html: text
        }

        MailService.mail.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    };

}
