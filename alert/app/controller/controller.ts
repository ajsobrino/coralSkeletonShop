import {Request,ResponseToolkit} from 'hapi';
import MailService from '../services/mail-service';
const Boom = require('@hapi/boom');


let sendMailInformation =(req:Request,resp:ResponseToolkit)=>{
    let email = req.payload?.email;
    let text = req.payload?.text;
    if(!email || !text){
       throw new  Boom.badRequest('Error missing information');
    }
    MailService.getInstance().sendEmail(email,'Solicitud de información', 'El usuario '+email+'\n'+'Pregunta: \n'+text);
    return resp.response('204');
}

let sendMailActivateUser = (req:Request,resp:ResponseToolkit)=>{
   let email = req.payload.email
   let keyActivate = req.payload?.keyActivate;
   let name = req.payload?.name;
   if(!email || !keyActivate){
    throw new  Boom.badRequest('Error missing information');
 }
 MailService.getInstance().sendEmailHtml(email,'Activación de cuenta', name+' te damos la bienvenida a está fantastica pagina \n Si quieres activar tu cuenta <a hnref="www.marca.com"> pulsa aquí</a> www.marca.com');
    return resp.response('204');
}

let sendMailRecoverPassword = (req:Request,resp:ResponseToolkit)=>{
   let email = req.payload.email
   let keyForRecoverPassword = req.payload?.keyForRecoverPassword;
   let name = req.payload?.name;
   if(!email || !keyForRecoverPassword){
    throw new  Boom.badRequest('Error missing information');
 }
 MailService.getInstance().sendEmailHtml(email,'email de recuperación de contraseña');
    return resp.response('204');
}

module.exports = {sendMailInformation,sendMailActivateUser,sendMailRecoverPassword};