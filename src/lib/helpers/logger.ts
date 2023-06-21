import logger from 'pino'
import dayjs from 'dayjs'
import 'pino-pretty'
const isTestEnv = process.env.NODE_ENV === 'test';

const log = logger({
  transport: isTestEnv
  ? undefined
  : {
      target: 'pino-pretty',
    },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default log
