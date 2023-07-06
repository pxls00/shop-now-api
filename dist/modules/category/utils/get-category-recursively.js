"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCategoryRecursivelyById(id, categories, nested_position = 1, main_category) {
    for (let i = 0; i < categories.length; i++) {
        const item = categories[i];
        if (item._id.toString() === id.toString()) {
            if (nested_position < 2) {
                return {
                    category: item,
                };
            }
            return {
                category: item,
                main_category: main_category,
            };
        }
        else if (item._id.toString() !== id && item.nested_categories.length) {
            if (nested_position < 2) {
                return getCategoryRecursivelyById(id, item.nested_categories, ++nested_position, item);
            }
            return getCategoryRecursivelyById(id, item.nested_categories, ++nested_position, main_category);
        }
    }
}
exports.default = getCategoryRecursivelyById;
//# sourceMappingURL=get-category-recursively.js.map