"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const default_1 = __importDefault(require("../../lib/default"));
const index_1 = require("../../modules/user/index");
const auth_services_1 = __importDefault(require("../../modules/auth/services/auth.services"));
const check_time_1 = __importDefault(require("../../modules/auth/utils/check-time"));
const userServices = index_1.UserServices;
const authServices = auth_services_1.default;
async function default_2(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        const decodeToken = jsonwebtoken_1.default.verify(token, default_1.default.secret_key_for_auth);
        const user = await userServices.getUserById(decodeToken.id);
        if (user?.token?.token === token) {
            req.user = decodeToken;
            next();
        }
        else if (user?.token?.token !== token || !token) {
            req.user = undefined;
            return res.status(403).json('User unauthorized');
        }
        else if ((0, check_time_1.default)(new Date(user.token.created_at), new Date(), default_1.default.user_token_expiress_time)) {
            authServices.clearTokenUser(user.id);
            req.user = undefined;
            return res.status(403).json('User unauthorized');
        }
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
}
exports.default = default_2;
//# sourceMappingURL=index.middleware.js.map