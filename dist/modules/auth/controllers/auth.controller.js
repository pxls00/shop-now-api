"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const index_1 = require("../../user/index");
const auth_services_1 = __importDefault(require("../services/auth.services"));
const hashPassword_1 = require("../../../utils/hashPassword");
const userServices = index_1.UserServices;
const authServices = auth_services_1.default;
class AuthController {
    async register(req, res) {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const { email, name, password } = req.body;
            const isUserExistsWithGivenEmail = await userServices.getUserByField({
                email,
            });
            if (isUserExistsWithGivenEmail &&
                Object.keys(isUserExistsWithGivenEmail).length) {
                return res
                    .status(409)
                    .json({ message: 'User with this email already exists' });
            }
            const userFields = {
                email,
                name,
                password,
            };
            const createdUser = await userServices.createUser(userFields);
            const tokenPayload = {
                id: createdUser.id,
                email: createdUser.email,
                name: createdUser.name,
            };
            const authenticatedUser = await authServices.setTokenUser(tokenPayload);
            return res.status(201).json(authenticatedUser);
        }
        catch (error) {
            return res.status(400).json({ message: 'Registration error', error });
        }
    }
    // public registerConfirm(req: Request, res:Response) {}
    async login(req, res) {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const { email, password } = req.body;
            const user = await userServices.getUserByField({ email });
            if (!user) {
                return res
                    .status(409)
                    .json({ message: 'User with this email does not exist' });
            }
            else {
                const validPassword = (0, hashPassword_1.comparePassword)(password, user.password);
                if (!validPassword) {
                    return res
                        .status(409)
                        .json({ message: `User's password is incorrect` });
                }
                else {
                    const tokenPayload = {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    };
                    const authenticatedUser = await authServices.setTokenUser(tokenPayload);
                    return res.json({ token: authenticatedUser?.token?.token });
                }
            }
        }
        catch (error) {
            return res.status(400).json({ message: 'Authentication error', error });
        }
    }
    async logout(req, res) {
        try {
            await authServices.clearTokenUser(req.user?.id);
            return res.status(204).json({ message: 'Logged out' });
        }
        catch (error) {
            return res.status(500).json({ message: error });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map