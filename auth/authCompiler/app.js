"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./app/server/server"));
var routes_manager_1 = __importDefault(require("./app/controller/routes/routes-manager"));
var dbConfig_1 = __importDefault(require("./app/config/dbConfig"));
dbConfig_1.default.getInstance();
var server = server_1.default.init(3000);
server.start();
server.app.use(routes_manager_1.default);
