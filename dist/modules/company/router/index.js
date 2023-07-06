"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = __importDefault(require("../lib/config"));
const index_middleware_1 = __importDefault(require("../../../middleware/auth-user/index.middleware"));
const company_controller_1 = __importDefault(require("../controllers/company.controller"));
const create_company_body_validator_1 = __importDefault(require("../middlewares/validators/create-company-body.validator"));
const router = (0, express_1.Router)();
const controller = new company_controller_1.default();
router.get(`${config_1.default.moduleRouteBaseURL}`, controller.getCompanyList);
router.get(`${config_1.default.moduleRouteBaseURL}/:${config_1.default.moduleRouteItemIdURL}`, controller.getCompanyById);
router.post(`${config_1.default.moduleRouteBaseURL}`, (0, create_company_body_validator_1.default)(), controller.createCompany);
router.post(`${config_1.default.moduleRouteBaseURL}/:${config_1.default.moduleRouteItemIdURL}${config_1.default.moduleRouteItemFollow}`, index_middleware_1.default, controller.followCompany);
exports.default = router;
//# sourceMappingURL=index.js.map