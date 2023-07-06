"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const company_services_1 = __importDefault(require("../services/company.services"));
const user_1 = require("../../user");
const services = company_services_1.default;
const userServices = user_1.UserServices;
class CompanyController {
    async getCompanyList(req, res) {
        try {
            const { skip, search, limit, by_rate, by_order_count } = req.query;
            const sortOptions = {
                by_order_count: {
                    key: 'orders_count',
                    value: -1,
                },
                by_popular: {
                    key: 'followers',
                    value: -1,
                },
                by_rate: {
                    key: 'rate',
                    value: -1,
                },
            };
            let sortOption = {};
            if (by_order_count) {
                sortOption = sortOptions['by_order_count'];
            }
            else if (by_rate) {
                sortOption = sortOptions['by_rate'];
            }
            else {
                sortOption = sortOptions['by_popular'];
            }
            const queryOption = {
                skip,
                search,
                limit,
                sortOption: sortOption,
            };
            if (isNaN(skip)) {
                queryOption.skip = 0;
            }
            else if (isNaN(limit)) {
                queryOption.limit = 0;
            }
            const response = await services.getCompanyList(queryOption);
            return res.status(200).json(response);
        }
        catch (error) {
            return res.json({ message: error });
        }
    }
    async getCompanyById(req, res) {
        try {
            const { company_id } = req.params;
            const response = await services.getCompanyById(company_id);
            if (!response) {
                return res.status(404).json({ message: 'Company not found' });
            }
            return res.status(200).json(response);
        }
        catch (error) {
            return res.status(404).json({ message: error });
        }
    }
    async createCompany(req, res) {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const { name, email, description, phone_number } = req.body;
            const isCompanyExistsWithGivenEmail = await services.getCompanyByField({
                email,
            });
            const isCompanyExistsWithGivenPhoneNumber = await services.getCompanyByField({
                phone_number,
            });
            if (isCompanyExistsWithGivenEmail &&
                Object.keys(isCompanyExistsWithGivenEmail).length) {
                return res
                    .status(409)
                    .json({ message: 'Company with this email already exists' });
            }
            if (isCompanyExistsWithGivenPhoneNumber &&
                Object.keys(isCompanyExistsWithGivenPhoneNumber).length) {
                return res
                    .status(409)
                    .json({ message: 'Company with this phone_number already exists' });
            }
            const companyFields = {
                name,
                email,
                description,
                phone_number,
            };
            const createdCompany = await services.createCompany(companyFields);
            return res.status(201).json({
                message: 'Company has been created succesfully',
                createdCompany,
            });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async followCompany(req, res) {
        try {
            if (!req.user) {
                return res.status(403).json({ message: 'User unauthorized' });
            }
            const { company_id } = req.params;
            const currentUser = await userServices.getUserById(req.user.id);
            const company = await services.getCompanyById(company_id);
            if (!company) {
                return res.status(404).json({ message: 'Company not found' });
            }
            const isUserExistsInFollowersListOfCompany = company.followers?.find((item) => item._id.toString() === currentUser?._id.toString());
            if (isUserExistsInFollowersListOfCompany) {
                return res.status(409).json({ message: 'User already followed' });
            }
            company.followers?.push(currentUser?._id);
            await company.save();
            return res
                .status(201)
                .json({ message: 'User has been followed succesfully' });
        }
        catch (error) {
            return res.status(500).json(error);
        }
    }
}
exports.default = CompanyController;
//# sourceMappingURL=company.controller.js.map