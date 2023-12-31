import mongoose from 'mongoose'
import config from '../lib/default'
import log from './logger'

function connect(): Promise<void> {
  const dbUri = config.dbUri

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
