import type { IDefaultConfig } from './default.types'
import dotenv from 'dotenv'
dotenv.config()

const {
  API_PORT,
  API_HOST,
  MONGODB_PASSWORD,
  API_BASE_URL,
  API_DOCS_URL,
  EMAIL_HOST_PASSWORD,
  EMAIL_HOST_USER,
} = process.env

const config: IDefaultConfig = {
  port: API_PORT as string,
  host: API_HOST as string,
  dbPassowrd: MONGODB_PASSWORD as string,
  dbUri: `mongodb+srv://Abdurahim:${MONGODB_PASSWORD}@shop-now-api.pikjhdq.mongodb.net/`,
  apiBaseURL: API_BASE_URL as string,
  apiDocsURL: API_DOCS_URL as string,
  emailHostUser: EMAIL_HOST_USER as string,
  emailHostPassword: EMAIL_HOST_PASSWORD as string,
  passwordSalt: 7 as number,
  secret_key_for_auth: 'secret_key' as string,
  user_token_expiress_time: 3600 as number,
}

export default config
