"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = __importDefault(require("../controller"));
var routeRequestInfo = ({
    method: 'POST',
    path: '/requestInfo',
    handler: controller_1.default.sendMailInformation
});
var routeActivateUser = ({
    method: 'POST',
    path: '/activateUser',
    handler: controller_1.default.sendMailActivateUser
});
var routeRecoverPassword = ({
    method: 'POST',
    path: '/recoverPassword',
    handler: controller_1.default.sendMailRecoverPassword
});
exports.default = [routeActivateUser, routeRequestInfo, routeRecoverPassword];
