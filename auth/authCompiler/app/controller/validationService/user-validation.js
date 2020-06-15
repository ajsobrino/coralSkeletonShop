"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserValition = /** @class */ (function () {
    function UserValition() {
    }
    UserValition.prototype.validationRead = function (user) {
        this.validateEmailAndPassword(user);
    };
    UserValition.prototype.validationUpdate = function (user) {
        this.validateEmailAndPassword(user);
    };
    UserValition.prototype.validationCreate = function (user) {
        if (user) {
            if (!(user === null || user === void 0 ? void 0 : user.email)) {
            }
            if (!(user === null || user === void 0 ? void 0 : user.password)) {
            }
            if (!(user === null || user === void 0 ? void 0 : user.name)) {
            }
            if (!(user === null || user === void 0 ? void 0 : user.numberPhone)) {
            }
        }
        else {
        }
    };
    UserValition.prototype.validateEmailAndPassword = function (user) {
        if (user) {
            if (!(user === null || user === void 0 ? void 0 : user.password)) {
            }
            if (!(user === null || user === void 0 ? void 0 : user.email)) {
            }
        }
        else {
        }
    };
    return UserValition;
}());
exports.default = UserValition;
