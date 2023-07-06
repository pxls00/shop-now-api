"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const default_1 = __importDefault(require("../lib/default"));
const hashPassword = function (password) {
    return bcrypt_1.default.hashSync(password, default_1.default.passwordSalt);
};
exports.hashPassword = hashPassword;
const comparePassword = function (expectPassword, receivePassword) {
    return bcrypt_1.default.compareSync(expectPassword, receivePassword);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=hashPassword.js.map