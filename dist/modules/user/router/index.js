"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = __importDefault(require("../lib/config"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = (0, express_1.Router)();
const controller = new user_controller_1.default();
/**
 *  @openapi
 *  /api/users
 */
router.get(`${config_1.default.moduleRouteBaseURL}`, controller.getUserList);
router.get(`${config_1.default.moduleRouteBaseURL}/:${config_1.default.moduleRouteItemIdURL}`, controller.getUserById);
exports.default = router;
//# sourceMappingURL=index.js.map