"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    numberPhone: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    keyForActivation: {
        type: String
    },
    keyForRecoverPassword: {
        type: String
    },
    delete: {
        type: Boolean,
        required: true
    }
});
exports.default = UserSchema;
