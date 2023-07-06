"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const dayjs_1 = __importDefault(require("dayjs"));
require("pino-pretty");
const isTestEnv = process.env.NODE_ENV === 'test';
const log = (0, pino_1.default)({
    transport: isTestEnv
        ? undefined
        : {
            target: 'pino-pretty',
        },
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${(0, dayjs_1.default)().format()}"`,
});
exports.default = log;
//# sourceMappingURL=logger.js.map