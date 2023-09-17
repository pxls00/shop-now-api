"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./utils/app"));
const db_1 = __importDefault(require("./utils/db"));
const default_1 = __importDefault(require("./lib/default"));
const logger_1 = __importDefault(require("./utils/logger"));
app_1.default.listen(+default_1.default.port, () => {
    logger_1.default.info(`Server is listening at http://localhost:${default_1.default.port}`);
    (0, db_1.default)();
});
//# sourceMappingURL=main.js.map