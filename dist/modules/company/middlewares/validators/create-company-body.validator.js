"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
function checkBodyRequest() {
    return [
        (0, express_validator_1.check)('name', `Name of the company must be more 1 and lesser than 30 characters`).isLength({ min: 1, max: 30 }),
        (0, express_validator_1.check)('email', 'Email must contain @').isEmail(),
        (0, express_validator_1.check)('phone_number').matches(/\(\d{2}\) \d{3}-\d{2}-\d{2}/),
        (0, express_validator_1.check)('description', 'Description of the company must be more 5 and lesser than 255 characters'),
    ];
}
exports.default = checkBodyRequest;
//# sourceMappingURL=create-company-body.validator.js.map