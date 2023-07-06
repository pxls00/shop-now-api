"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(givenTime, currentTime, limitTime) {
    const secondsPassed = Math.abs(currentTime.getTime() - givenTime.getTime());
    return secondsPassed >= limitTime;
}
exports.default = default_1;
//# sourceMappingURL=check-time.js.map