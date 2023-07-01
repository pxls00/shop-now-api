import type { IGenerateAccessTokenPayload } from '../modules/auth/services/auth.types'
import type { Request } from 'express'

export interface IBaseModuleConfig {
  moduleRouteBaseURL: Readonly<string>
}

export interface IRequestAuthenticated extends Request {
  user?: Partial<IGenerateAccessTokenPayload>
}
