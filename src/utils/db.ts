import mongoose from 'mongoose'
import config from '../lib/default'
import log from './logger'

function connect() {
  const dbUri = config.dbUri

  return mongoose
    .connect(dbUri)
    .then(() => {
      log.info('DB connected')
    })
    .catch((error) => {
      log.error('DB error', error)
    })
}

export default connect
