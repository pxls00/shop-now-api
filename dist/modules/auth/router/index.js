"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = __importDefault(require("../lib/config"));
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const register_body_validator_1 = __importDefault(require("../middlewares/validators/register-body.validator"));
const login_body_validator_1 = __importDefault(require("../middlewares/validators/login-body.validator"));
const index_middleware_1 = __importDefault(require("../../../middleware/auth-user/index.middleware"));
const router = (0, express_1.Router)();
const controller = new auth_controller_1.default();
/**
 *  @openapi
 *  /api/auth
 */
router.post(`${config_1.default.moduleRouteBaseURL}${config_1.default.moduleRegisterRoute}`, (0, register_body_validator_1.default)(), controller.register);
router.post(`${config_1.default.moduleRouteBaseURL}${config_1.default.moduleLoginRoute}`, (0, login_body_validator_1.default)(), controller.login);
router.delete(`${config_1.default.moduleRouteBaseURL}${config_1.default.moduleLogoutRoute}`, index_middleware_1.default, controller.logout);
exports.default = router;
//# sourceMappingURL=index.js.map