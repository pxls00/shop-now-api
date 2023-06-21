import supertest from 'supertest'
import app from '../utils/app'
import config from '../lib/default'
import { CompanyConfig } from '../modules/company/index'
import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

describe('company', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
  })
  describe('get company route', () => {
    describe('given the company does not exist', () => {
      it('it should return 404', async () => {
        const companyTestId = 'company-123'
        await supertest(app)
          .get(
            `${config.apiBaseURL}${CompanyConfig.moduleRouteBaseURL}/${companyTestId}`
          )
          .expect(404)
      })
    })
  })
  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })
})
