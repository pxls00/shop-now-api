"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCategoryParentRecursivelyById(id, categories, nested_position = 1, parent_category, main_category) {
    for (let i = 0; i < categories.length; i++) {
        const item = categories[i];
        if (item._id.toString() === id.toString()) {
            if (nested_position < 2) {
                return {
                    parent_category: item,
                };
            }
            return {
                parent_category: parent_category,
                main_category: main_category,
            };
        }
        else if (item._id.toString() !== id && item.nested_categories.length) {
            if (nested_position < 2) {
                return getCategoryParentRecursivelyById(id, item.nested_categories, ++nested_position, item, item);
            }
            return getCategoryParentRecursivelyById(id, item.nested_categories, ++nested_position, item, main_category);
        }
    }
}
exports.default = getCategoryParentRecursivelyById;
//# sourceMappingURL=get-category-parent-recursively.js.map