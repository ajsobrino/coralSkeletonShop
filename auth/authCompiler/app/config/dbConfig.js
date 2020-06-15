"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mongoose = require("mongoose");
var config = require("../config/config");
var ConnectionDB = /** @class */ (function () {
    function ConnectionDB() {
        Mongoose.connect(config.urlDB, config.configDBObject, function (err) {
            if (err)
                throw err;
            console.log('Start connect to mongodb');
        });
    }
    ConnectionDB.getInstance = function () {
        if (!this.instance) {
            this.instance = new ConnectionDB();
        }
        return this.instance;
    };
    return ConnectionDB;
}());
exports.default = ConnectionDB;
