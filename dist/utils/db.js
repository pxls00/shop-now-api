"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = __importDefault(require("./logger"));
function connect() {
    const dbUri = "mongodb://localhost:5000/admin";
    return mongoose_1.default
        .connect(dbUri)
        .then(() => {
        logger_1.default.info('DB connected');
    })
        .catch((error) => {
        logger_1.default.error(error);
    });
}
exports.default = connect;
//# sourceMappingURL=db.js.map