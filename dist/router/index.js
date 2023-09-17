"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const default_1 = __importDefault(require("../lib/default"));
// Marketplace
const index_1 = __importDefault(require("../marketplace/router/index"));
// Company Admin
const index_2 = __importDefault(require("../company-admin/router/index"));
const router = (0, express_1.Router)();
// MarketPlace router
router.use(default_1.default.apiMarketPlaceURL, index_1.default);
// CompanyAdmin router
router.use(default_1.default.apiCompanyAdminURL, index_2.default);
exports.default = router;
//# sourceMappingURL=index.js.map