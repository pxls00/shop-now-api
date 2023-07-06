"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CategorySchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String,
    },
    key: {
        required: true,
        type: String,
    },
    nested_categories: {
        type: [this],
        default: () => [],
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});
const Category = (0, mongoose_1.model)('category', CategorySchema);
exports.default = Category;
//# sourceMappingURL=category.model.js.map