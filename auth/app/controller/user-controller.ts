import { Request, Response } from 'express';
import UserService from '../services/user-service';
import UserApp from '../model/user-model';
import Validation from './validationService/user-validation';
import jsonToken = require('jsonwebtoken');

const validation = new Validation();
const userService: UserService = UserService.getInstance();

let login = async (req: Request, resp: Response) => {
    let body = req.body as UserApp;
    validation.validationRead(body);
    let token = await userService.login(body.email, body.password);
    resp.json({
        ok: true,
        token: token
    }).status(200);
}

let create = async (req: Request, resp: Response) => {
    let user = req.body as UserApp;
    validation.validationCreate(user);
    let token = await userService.create(user);
    resp.json({ ok: true, token: token }).status(201);
}

let update = async (req: Request, resp: Response) => {
    let user = req.body as UserApp;
    let token = req.headers['authorization'];
    let tokenGood = token?.split(" ")[1];
    console.log(jsonToken.verify(tokenGood,'secretkey').email);
    validation.validationUpdate(user);
    await userService.update(user);
    resp.json({
        ok: true,
        message: 'Created'
    });
}

let option = (req: Request, resp: Response) => {
    resp.json({
        ok: true,
        options: ['GET', 'DELETE', 'PATH', 'POST']
    });
};


let remove = async (req: Request, resp: Response) => {
    let user = req.body as UserApp;
    await userService.delete(user.email);
    resp.status(204).send();
};




module.exports = { login, create, update, option, remove };