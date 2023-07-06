"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const default_1 = __importDefault(require("../../../lib/default"));
const index_1 = require("../../user/index");
const userServices = index_1.UserServices;
class AuthServices {
    async geenrateAccessToken({ id, name, email, }) {
        const payload = {
            id,
            name,
            email,
        };
        return await jsonwebtoken_1.default.sign(payload, default_1.default.secret_key_for_auth, {
            expiresIn: default_1.default.user_token_expiress_time,
        });
    }
    async setTokenUser(payload) {
        const token = {
            token: await this.geenrateAccessToken(payload),
            created_at: new Date(),
        };
        const user = await userServices.updateUser(payload.id, { token });
        return user;
    }
    async clearTokenUser(id) {
        const user = await userServices.getUserById(id);
        if (user) {
            user.token = undefined;
            user.save();
        }
    }
}
exports.default = new AuthServices();
//# sourceMappingURL=auth.services.js.map