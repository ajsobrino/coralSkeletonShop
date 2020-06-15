import express = require('express');
import routerUser from './routes-user';

const app = express();

app.use(routerUser);


export default routerUser;


