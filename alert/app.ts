import ServerHapi from './app/server';

const server = new ServerHapi();
server.host = 'localhost';
server.port =3001;

server.init();




