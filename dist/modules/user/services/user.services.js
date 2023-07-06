"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const hashPassword_1 = require("../../../utils/hashPassword");
class UserSevices {
    async getUserList() {
        const users = await user_model_1.default.find();
        return users;
    }
    async getUserById(id) {
        const user = await user_model_1.default.findById(id);
        return user;
    }
    async createUser(fields) {
        const newUser = { ...fields };
        newUser.password = (0, hashPassword_1.hashPassword)(newUser.password);
        const user = new user_model_1.default(newUser);
        (await user.save());
        return user;
    }
    async updateUser(id, fields) {
        return await user_model_1.default.findByIdAndUpdate(id, fields, { new: true });
    }
    async getUserByField(field) {
        return await user_model_1.default.findOne(field);
    }
}
exports.default = new UserSevices();
//# sourceMappingURL=user.services.js.map