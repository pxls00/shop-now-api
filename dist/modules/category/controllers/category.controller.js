"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const category_services_1 = __importDefault(require("../services/category.services"));
const generate_key_1 = __importDefault(require("../utils/generate-key"));
const categoryServices = category_services_1.default;
class CategoryController {
    async getCategoryList(req, res) {
        try {
            const categories = await categoryServices.getCategoryList();
            res.status(200).json({
                data: categories,
                total_count: categories.length,
            });
            return;
        }
        catch (error) {
            return res.json(error);
        }
    }
    async getCategoryById(req, res) {
        try {
            const { category_id } = req.params;
            const { category } = (await categoryServices.getCategoryById(category_id));
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.status(200).json(category);
        }
        catch (error) {
            res.json(error);
        }
    }
    async createCategory(req, res) {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const newCategoryfields = req.body;
            newCategoryfields.key = (0, generate_key_1.default)(newCategoryfields.name);
            const createdCategory = await categoryServices.createCategory(newCategoryfields, req.params.category_id || '');
            if (!createdCategory) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.status(201).json(createdCategory);
        }
        catch (error) {
            return res.json(error);
        }
    }
    async updateCategoryById(req, res) {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const { category_id } = req.params;
            const newCategoryfields = req.body;
            newCategoryfields.key = (0, generate_key_1.default)(newCategoryfields.name);
            const category = await categoryServices.updateCategoryById(category_id, newCategoryfields);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.status(201).json(category);
        }
        catch (error) {
            return res.json(error);
        }
    }
    async deleteCategoryById(req, res) {
        try {
            const { category_id } = req.params;
            const category = await categoryServices.deleteCategoryById(category_id);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            return res.status(201).json('Category deleted successfuly');
        }
        catch (error) {
            return res.json(error);
        }
    }
}
exports.default = CategoryController;
//# sourceMappingURL=category.controller.js.map