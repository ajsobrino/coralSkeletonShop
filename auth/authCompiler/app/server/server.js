"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
        this.app = express();
    }
    Server.init = function (port) {
        return new Server(port);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Start server in  port ' + _this.port);
        });
    };
    return Server;
}());
exports.default = Server;
