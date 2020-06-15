import { ServerRoute } from "hapi";
import controller from '../controller';


let routeRequestInfo =({
    method: 'POST',
    path: '/requestInfo',
    handler: controller.sendMailInformation
}) as ServerRoute;

let routeActivateUser =({
    method: 'POST',
    path: '/activateUser',
    handler: controller.sendMailActivateUser
}) as ServerRoute;

let routeRecoverPassword =({
    method: 'POST',
    path: '/recoverPassword',
    handler: controller.sendMailRecoverPassword
}) as ServerRoute;


export default [routeActivateUser,routeRequestInfo,routeRecoverPassword];

