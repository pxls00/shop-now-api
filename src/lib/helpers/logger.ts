import logger from 'pino'
import dayjs from 'dayjs'
import 'pino-pretty'

const log = logger({
  transport: {
    target: 'pino-pretty',
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default log
