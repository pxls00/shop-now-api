"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
    logo_img: {
        type: String,
        default: '',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    followings: {
        type: [String],
        dafault: [],
    },
    token: {
        token: {
            type: String,
            default: '',
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
    },
});
UserSchema.post('find', function (docs) {
    for (const doc of docs) {
        doc.token = undefined;
        doc.followings = undefined;
        doc.password = undefined;
    }
});
const User = (0, mongoose_1.model)('users', UserSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map