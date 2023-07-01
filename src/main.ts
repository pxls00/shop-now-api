import app from './utils/app'
import mongooseConnect from './utils/db'
import config from './lib/default'
import log from './utils/logger'
app.listen(+config.port as number, config.host, () => {
  log.info(`Server is listening at http://${config.host}:${config.port}`)
  mongooseConnect()
})
