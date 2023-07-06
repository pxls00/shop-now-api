"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const packageJson = JSON.parse(fs_1.default.readFileSync(path_1.default.resolve(__dirname, '../../package.json'), 'utf8'));
const { version } = packageJson;
const default_1 = __importDefault(require("../lib/default"));
const logger_1 = __importDefault(require("./logger"));
const router = (0, express_1.Router)();
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: `API Shop-now docs`,
            version,
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/modules/*/swagger/*/*.swagger.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
// Swagger page
router.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
// Docs in JSON format
router.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});
function swaggerDocs() {
    logger_1.default.info(`Docs available at http://${default_1.default.host}:${default_1.default.port}${default_1.default.apiDocsURL}`);
    return router;
}
exports.default = swaggerDocs;
//# sourceMappingURL=swagger.js.map