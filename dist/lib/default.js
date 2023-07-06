"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { API_PORT, API_HOST, MONGODB_PASSWORD, API_BASE_URL, API_DOCS_URL, EMAIL_HOST_PASSWORD, EMAIL_HOST_USER, } = process.env;
const config = {
    port: API_PORT,
    host: API_HOST,
    dbPassowrd: MONGODB_PASSWORD,
    dbUri: `mongodb+srv://Abdurahim:${MONGODB_PASSWORD}@shop-now-api.pikjhdq.mongodb.net/`,
    apiBaseURL: API_BASE_URL,
    apiDocsURL: API_DOCS_URL,
    emailHostUser: EMAIL_HOST_USER,
    emailHostPassword: EMAIL_HOST_PASSWORD,
    passwordSalt: 7,
    secret_key_for_auth: 'secret_key',
    user_token_expiress_time: 3600,
};
exports.default = config;
//# sourceMappingURL=default.js.map