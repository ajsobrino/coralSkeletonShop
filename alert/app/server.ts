const Hapi = require('@hapi/hapi');
import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import { ServerRoute } from "hapi";
import routes from './controller/routes/routes-mail';

export default class ServerHapi {

    serverHapi: Server;
    port: number = 3001;
    host: string = 'localhost';
    constructor() {
        this.serverHapi = new Server({
            port: this.port,
            host: this.host
        });

    }
    async init() {

       console.log(routes);
        this.serverHapi.route(routes);

        await this.serverHapi.start();
        console.log('Server running on port ' + this.port + ' and host ' + this.host);
    };
   

    
}












