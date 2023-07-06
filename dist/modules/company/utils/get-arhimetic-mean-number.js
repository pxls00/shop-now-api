"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(rate) {
    return parseFloat((rate.reduce((acc, item) => acc + item.rate_number, 0) /
        rate.length).toFixed(1));
}
exports.default = default_1;
//# sourceMappingURL=get-arhimetic-mean-number.js.map