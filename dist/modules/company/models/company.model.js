"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_autopopulate_1 = __importDefault(require("mongoose-autopopulate"));
// import { IRateItem } from './company.types'
const CompanySchema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String,
    },
    logo_img: {
        type: String,
        default: '',
    },
    description: {
        required: true,
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    orders_count: {
        type: Number,
        default: 0,
    },
    rate: [
        {
            user: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: 'users',
                required: true,
                autopopulate: true,
            },
            comment: {
                type: String,
                default: '',
            },
            rate_number: {
                type: Number,
                required: true,
            },
            created_at: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    rate_base: {
        type: Number,
        default: 5.0,
    },
    followers: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'users',
            required: true,
            autopopulate: true,
        },
    ],
    followers_count: {
        type: Number,
        default: 0,
    },
    banner_img: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
});
CompanySchema.post('find', function (docs) {
    for (const doc of docs) {
        // doc.followers_count = doc.followers?.length as number
        doc.followers = undefined;
        // doc.rate_base = getArhimeticMeanNumber(doc.rate as IRateItem[])
        doc.rate = undefined;
    }
});
CompanySchema.plugin(mongoose_autopopulate_1.default);
const Company = (0, mongoose_1.model)('companies', CompanySchema);
exports.default = Company;
//# sourceMappingURL=company.model.js.map