"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserServices = exports.UserConfig = exports.UserRouter = void 0;
const index_1 = __importDefault(require("./router/index"));
exports.UserRouter = index_1.default;
const config_1 = __importDefault(require("./lib/config"));
exports.UserConfig = config_1.default;
const user_model_1 = __importDefault(require("./models/user.model"));
exports.UserModel = user_model_1.default;
const user_services_1 = __importDefault(require("./services/user.services"));
exports.UserServices = user_services_1.default;
//# sourceMappingURL=index.js.map