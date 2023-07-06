"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_model_1 = __importDefault(require("../models/category.model"));
const get_category_recursively_1 = __importDefault(require("../utils/get-category-recursively"));
const get_category_parent_recursively_1 = __importDefault(require("../utils/get-category-parent-recursively"));
const mongoose_1 = __importDefault(require("mongoose"));
class CategoryServices {
    async getCategoryList() {
        return await category_model_1.default.find({});
    }
    async getCategoryById(id) {
        const categories = await this.getCategoryList();
        const category = categories.find((item) => item._id.toString() === id.toString());
        if (category) {
            return { category };
        }
        const { category: categoryResult, main_category } = (0, get_category_recursively_1.default)(id, categories);
        if (!categoryResult) {
            return undefined;
        }
        else {
            if (main_category) {
                return {
                    category: categoryResult,
                    main_category,
                };
            }
            return { category: categoryResult };
        }
    }
    async getCategoryParentById(id) {
        const categories = await this.getCategoryList();
        const category = categories.find((item) => item._id.toString() === id.toString());
        if (category) {
            return { parent_category: category };
        }
        const { parent_category, main_category } = (0, get_category_parent_recursively_1.default)(id, categories);
        if (!parent_category) {
            return undefined;
        }
        else {
            if (main_category) {
                return {
                    parent_category,
                    main_category,
                };
            }
            return { parent_category };
        }
    }
    async createCategory(fields, id) {
        const newCategoryFields = { ...fields };
        if (id) {
            const { category, main_category } = (await this.getCategoryById(id));
            if (!category) {
                return undefined;
            }
            newCategoryFields['_id'] = new mongoose_1.default.Types.ObjectId();
            newCategoryFields['created_at'] = new Date();
            newCategoryFields['nested_categories'] = [];
            category.nested_categories.push(newCategoryFields);
            if (main_category) {
                await main_category.save();
                const model = await category_model_1.default.findByIdAndUpdate(main_category._id, main_category, { new: true });
                return model;
            }
            await category.save();
            return category;
        }
        else {
            const category = new category_model_1.default(newCategoryFields);
            await category.save();
            return category;
        }
    }
    async updateCategoryById(id, updatePayload) {
        const { category, main_category } = (await this.getCategoryById(id));
        if (!category) {
            return undefined;
        }
        category.name = updatePayload.name;
        category.key = updatePayload.key;
        if (main_category) {
            await main_category.save();
            const model = await category_model_1.default.findByIdAndUpdate(main_category._id, main_category, { new: true });
            return model;
        }
        await category.save();
        return category;
    }
    async deleteCategoryById(id) {
        const { parent_category, main_category } = (await this.getCategoryParentById(id));
        if (!parent_category) {
            return undefined;
        }
        if (main_category) {
            parent_category.nested_categories =
                parent_category.nested_categories.filter((item) => item._id.toString() !== id.toString());
            await main_category.save();
            const model = await category_model_1.default.findByIdAndUpdate(main_category._id, main_category, { new: true });
            return model;
        }
        await category_model_1.default.findByIdAndDelete(parent_category.id);
        return parent_category;
    }
}
exports.default = new CategoryServices();
//# sourceMappingURL=category.services.js.map