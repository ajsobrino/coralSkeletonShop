import Server from './app/server/server'
import userRouter from './app/controller/routes/routes-manager';
import connectionDB from './app/config/dbConfig';

connectionDB.getInstance();
const server = Server.init(3000);

server.start();
server.app.use(userRouter);