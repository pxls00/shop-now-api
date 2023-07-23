"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_1 = __importDefault(require("../utils/swagger"));
const company_1 = require("../modules/company");
const auth_1 = require("../modules/auth");
const user_1 = require("../modules/user");
const category_1 = require("../modules/category");
const filters_1 = require("../modules/filters");
const default_1 = __importDefault(require("../lib/default"));
const router = (0, express_1.Router)();
router.use(default_1.default.apiBaseURL, company_1.CompanyRouter);
router.use(default_1.default.apiBaseURL, auth_1.AuthRouter);
router.use(default_1.default.apiBaseURL, user_1.UserRouter);
router.use(default_1.default.apiBaseURL, category_1.CategoryRouter);
router.use(default_1.default.apiBaseURL, filters_1.FilterRouter);
router.use(default_1.default.apiBaseURL, filters_1.FilterColorRouter);
// router.use(config.apiBaseURL, FilterOptionRouter)
router.use(default_1.default.apiBaseURL, filters_1.FilterBrandRouter);
// Swager page
router.use((0, swagger_1.default)());
exports.default = router;
//# sourceMappingURL=index.js.map