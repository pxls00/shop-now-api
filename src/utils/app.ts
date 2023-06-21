import express from 'express'
import cors from 'cors'
import corsOptions from '../lib/cors-options'
// import config from '../configs/default'

import router from '../router/index'

class App {
  public server

  constructor() {
    this.server = express()
    this.cors()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  cors() {
    this.server.use(cors(corsOptions))
  }

  routes() {
    this.server.use(router)
  }
}

export default new App().server
