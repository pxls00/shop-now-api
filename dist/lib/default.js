"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { API_PORT, API_HOST, MONGODB_PASSWORD, API_MARKETPLACE_BASE_URL, API_DOCS_MARKETPLACE_TITLE, API_DOCS_POINT_ADMIN_TITLE, API_DOCS_BASE_URL, API_DOCS_COMPANY_ADMIN_TITLE, EMAIL_HOST_PASSWORD, EMAIL_HOST_USER, API_COMPANY_BASE_URL, MONGO_URI, } = process.env;
const config = {
    port: API_PORT,
    host: API_HOST,
    dbPassowrd: MONGODB_PASSWORD,
    dbUri: `mongodb://${MONGO_URI}:27017/admin`,
    apiBaseDocsUrl: API_DOCS_BASE_URL,
    apiMarketPlaceURL: API_MARKETPLACE_BASE_URL,
    apiMarketplaceDocsInfoTitle: API_DOCS_MARKETPLACE_TITLE,
    apiMainAdminDocsInfoTitle: API_DOCS_POINT_ADMIN_TITLE,
    apiCompanyAdminDocsInfoTitle: API_DOCS_COMPANY_ADMIN_TITLE,
    apiCompanyAdminURL: API_COMPANY_BASE_URL,
    emailHostUser: EMAIL_HOST_USER,
    emailHostPassword: EMAIL_HOST_PASSWORD,
    passwordSalt: 7,
    secret_key_for_auth: 'secret_key',
    user_token_expiress_time: 3600,
};
exports.default = config;
//# sourceMappingURL=default.js.map