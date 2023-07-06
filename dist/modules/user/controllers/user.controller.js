"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = __importDefault(require("../services/user.services"));
// import type {IUserDocument} from '../models/user.types'
const userServices = user_services_1.default;
class CompanyController {
    async getUserList(req, res) {
        try {
            const users = await userServices.getUserList();
            res.status(200).json({
                data: users,
                total_count: users.length,
            });
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async getUserById(req, res) {
        try {
            const { user_id } = req.params;
            const user = await userServices.getUserById(user_id);
            if (!user) {
                return res.status(404).json('User not found');
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.json({ message: error });
        }
    }
}
exports.default = CompanyController;
//# sourceMappingURL=user.controller.js.map