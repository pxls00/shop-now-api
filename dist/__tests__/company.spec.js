"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../utils/app"));
const default_1 = __importDefault(require("../lib/default"));
const index_1 = require("../modules/company/index");
const mongodb_memory_server_1 = require("mongodb-memory-server");
const mongoose_1 = __importDefault(require("mongoose"));
describe('company', () => {
    beforeAll(async () => {
        const mongoServer = await mongodb_memory_server_1.MongoMemoryServer.create();
        await mongoose_1.default.connect(mongoServer.getUri());
    });
    describe('get company route', () => {
        describe('given the company does not exist', () => {
            it('it should return 404', async () => {
                const companyTestId = 'company-123';
                await (0, supertest_1.default)(app_1.default)
                    .get(`${default_1.default.apiBaseURL}${index_1.CompanyConfig.moduleRouteBaseURL}/${companyTestId}`)
                    .expect(404);
            });
        });
    });
    afterAll(async () => {
        await mongoose_1.default.disconnect();
        await mongoose_1.default.connection.close();
    });
});
//# sourceMappingURL=company.spec.js.map