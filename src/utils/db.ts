import mongoose from 'mongoose'
import config from '../lib/default'
import log from './logger'

function connect(): Promise<void> {
  const dbUri = "mongodb://localhost:5000/admin" as string

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info('DB connected')
    })
    .catch((error) => {
      log.error(error)
    })
}

export default connect
