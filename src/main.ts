import app from './lib/helpers/app'
import mongooseConnect from './lib/helpers/db'
import config from './lib/configs/default'
import log from './lib/helpers/logger'

app.listen(config.port, config.host, () => {
  log.info(`Server is listening at http://${config.host}:${config.port}`)
  mongooseConnect()
})
