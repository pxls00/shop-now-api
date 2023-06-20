import type { Express, Request, Response } from 'express'
import { Router } from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import type { Options } from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { version } from '../../../package.json'
import config from '../configs/default'
import log from './logger'

const router = Router()

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: `API Shop-now docs`,
      version,
    },
  },
  apis: ['./src/modules/company/router/index.ts', './src/schema/*.ts'],
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
