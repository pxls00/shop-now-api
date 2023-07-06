"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyModel = exports.CompanyConfig = exports.CompanyRouter = void 0;
const index_1 = __importDefault(require("./router/index"));
exports.CompanyRouter = index_1.default;
const config_1 = __importDefault(require("./lib/config"));
exports.CompanyConfig = config_1.default;
const company_model_1 = __importDefault(require("./models/company.model"));
exports.CompanyModel = company_model_1.default;
//# sourceMappingURL=index.js.map