"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var user_schema_1 = __importDefault(require("./schemas/user-schema"));
exports.default = mongoose_1.default.model('UserApp', user_schema_1.default);
