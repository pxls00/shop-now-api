"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
function checkBodyRequest() {
    return [
        (0, express_validator_1.check)('name', `Name of the category must be more 1 and lesser than 30 characters`).isLength({ min: 1, max: 80 }),
    ];
}
exports.default = checkBodyRequest;
//# sourceMappingURL=category-name.validator.js.map