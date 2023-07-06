"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
function checkBodyRequest() {
    return [
        (0, express_validator_1.check)('name', `Name of the user must be more 5 and lesser than 30 characters`).isLength({ min: 5, max: 30 }),
        (0, express_validator_1.check)('password', 'Password of user should be more 8 and lesser than 16 characters').isLength({ min: 8, max: 16 }),
        (0, express_validator_1.check)('email', 'Email must contain @').isEmail(),
    ];
}
exports.default = checkBodyRequest;
//# sourceMappingURL=register-body.validator.js.map