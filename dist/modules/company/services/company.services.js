"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_model_1 = __importDefault(require("../models/company.model"));
class CompanyServices {
    async getCompanyList(query) {
        const sortOption = {};
        sortOption[query.sortOption.key] = query.sortOption.value;
        const pagination = [];
        if (!isNaN(query.limit)) {
            pagination.push({ $limit: Number(query.limit) });
        }
        else if (!isNaN(query.skip)) {
            pagination.push({ $skip: Number(query.skip) });
        }
        const aggregation = await company_model_1.default.aggregate([
            { $match: { name: new RegExp(query.search, 'i') } },
            { $sort: sortOption },
            {
                $facet: {
                    metadata: [{ $count: 'total' }],
                    data: pagination,
                },
            },
        ]);
        const count = aggregation[0].metadata[0].total;
        const result = aggregation[0].data;
        return {
            data: result,
            total_count: count,
            has_next_page: count > Number(query.skip) + Number(query.limit),
        };
    }
    async getCompanyById(id) {
        return await company_model_1.default.findById(id);
    }
    async getCompanyByField(field) {
        return await company_model_1.default.findOne(field);
    }
    async createCompany(fields) {
        const newCompany = { ...fields };
        const company = new company_model_1.default(newCompany);
        (await company.save());
        return company;
    }
}
exports.default = new CompanyServices();
//# sourceMappingURL=company.services.js.map