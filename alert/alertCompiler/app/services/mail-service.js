"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = require("nodemailer");
var MailService = /** @class */ (function () {
    function MailService() {
        var _this = this;
        this.email = 'ajsobrinodeveloper@gmail.com';
        this.password = 'aj071696';
        this.sendEmail = function (toEmail, subject, text) {
            var mailOptions = {
                from: _this.email,
                to: toEmail,
                subject: subject,
                text: text
            };
            MailService.mail.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email sent: ' + info.response);
                }
            });
        };
        this.sendEmailHtml = function (toEmail, subject, text) {
            var mailOptions = {
                from: _this.email,
                to: toEmail,
                subject: subject,
                html: text
            };
            MailService.mail.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Email sent: ' + info.response);
                }
            });
        };
        MailService.mail = nodemailer_1.createTransport({
            service: 'gmail',
            port: 567,
            auth: {
                user: this.email,
                pass: this.password
            }
        });
    }
    MailService.getInstance = function () {
        if (!this.instance) {
            this.instance = new MailService();
        }
        return this.instance;
    };
    return MailService;
}());
exports.default = MailService;
