"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mail_service_1 = __importDefault(require("../services/mail-service"));
var Boom = require('@hapi/boom');
var sendMailInformation = function (req, resp) {
    var _a, _b;
    var email = (_a = req.payload) === null || _a === void 0 ? void 0 : _a.email;
    var text = (_b = req.payload) === null || _b === void 0 ? void 0 : _b.text;
    if (!email || !text) {
        throw new Boom.badRequest('Error missing information');
    }
    mail_service_1.default.getInstance().sendEmail(email, 'Solicitud de información', 'El usuario ' + email + '\n' + 'Pregunta: \n' + text);
    return resp.response('204');
};
var sendMailActivateUser = function (req, resp) {
    var _a, _b;
    var email = req.payload.email;
    var keyActivate = (_a = req.payload) === null || _a === void 0 ? void 0 : _a.keyActivate;
    var name = (_b = req.payload) === null || _b === void 0 ? void 0 : _b.name;
    if (!email || !keyActivate) {
        throw new Boom.badRequest('Error missing information');
    }
    mail_service_1.default.getInstance().sendEmailHtml(email, 'Activación de cuenta', name + ' te damos la bienvenida a está fantastica pagina \n Si quieres activar tu cuenta <a hnref="www.marca.com"> pulsa aquí</a> www.marca.com');
    return resp.response('204');
};
var sendMailRecoverPassword = function (req, resp) {
    var _a, _b;
    var email = req.payload.email;
    var keyForRecoverPassword = (_a = req.payload) === null || _a === void 0 ? void 0 : _a.keyForRecoverPassword;
    var name = (_b = req.payload) === null || _b === void 0 ? void 0 : _b.name;
    if (!email || !keyForRecoverPassword) {
        throw new Boom.badRequest('Error missing information');
    }
    mail_service_1.default.getInstance().sendEmailHtml(email, 'email de recuperación de contraseña');
    return resp.response('204');
};
module.exports = { sendMailInformation: sendMailInformation, sendMailActivateUser: sendMailActivateUser, sendMailRecoverPassword: sendMailRecoverPassword };
