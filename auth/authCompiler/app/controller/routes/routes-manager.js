"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_user_1 = __importDefault(require("./routes-user"));
var app = express();
app.use(routes_user_1.default);
exports.default = routes_user_1.default;
