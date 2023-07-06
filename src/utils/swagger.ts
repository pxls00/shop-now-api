import type { Request, Response } from 'express'
import { Router } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import type { Options } from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs';
import path from 'path';

const packageJson = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../package.json'), 'utf8'));
const { version } = packageJson;
import config from '../lib/default'
import log from './logger'

const router = Router()

const options: Options = {
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
}

const swaggerSpec = swaggerJsdoc(options)

// Swagger page
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Docs in JSON format
router.get('/docs.json', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

function swaggerDocs() {
  log.info(
    `Docs available at http://${config.host}:${config.port}${config.apiDocsURL}`
  )

  return router
}

export default swaggerDocs
