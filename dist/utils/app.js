"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cors_options_1 = __importDefault(require("../lib/cors-options"));
// import config from '../configs/default'
const index_1 = __importDefault(require("../router/index"));
class App {
    server;
    constructor() {
        this.server = (0, express_1.default)();
        this.cors();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express_1.default.json());
    }
    cors() {
        this.server.use((0, cors_1.default)(cors_options_1.default));
    }
    routes() {
        this.server.use(index_1.default);
    }
}
exports.default = new App().server;
//# sourceMappingURL=app.js.map