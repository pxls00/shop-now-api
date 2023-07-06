"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = __importDefault(require("../lib/config"));
const category_controller_1 = __importDefault(require("../controllers/category.controller"));
const category_name_validator_1 = __importDefault(require("../middlewares/validators/category-name.validator"));
const router = (0, express_1.Router)();
const controller = new category_controller_1.default();
router.get(`${config_1.default.moduleRouteBaseURL}`, controller.getCategoryList);
router.get(`${config_1.default.moduleRouteBaseURL}/:${config_1.default.moduleRouteItemIdURL}`, controller.getCategoryById);
router.post(`${config_1.default.moduleRouteBaseURL}`, (0, category_name_validator_1.default)(), controller.createCategory);
router.post(`${config_1.default.moduleRouteBaseURL}/:${config_1.default.moduleRouteItemIdURL}`, (0, category_name_validator_1.default)(), controller.createCategory);
router.patch(`${config_1.default.moduleRouteBaseURL}/:${config_1.default.moduleRouteItemIdURL}`, (0, category_name_validator_1.default)(), controller.updateCategoryById);
router.delete(`${config_1.default.moduleRouteBaseURL}/:${config_1.default.moduleRouteItemIdURL}`, controller.deleteCategoryById);
// router.delete(`${config.moduleRouteBaseURL}`)
exports.default = router;
//# sourceMappingURL=index.js.map