import jwt from 'jsonwebtoken'
import config from '../../../../lib/default'
import { UserServices } from '../../../user/index'
import AuthServices from '../../services/auth.services'
import checkTime from '../../utils/check-time'

import type { Request, Response, NextFunction } from 'express'
import type { IGenerateAccessTokenPayload } from '../../services/auth.types'

const userServices = UserServices
const authServices = AuthServices

interface IRequestType extends Request {
  user?: Partial<IGenerateAccessTokenPayload>
}

export default async function (
  req: IRequestType,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> {
  try {
    const token = req.headers.authorization?.split(' ')[1] as string
    const decodeToken = jwt.verify(
      token,
      config.secret_key_for_auth
    ) as IGenerateAccessTokenPayload
    const user = await userServices.getUserById(decodeToken.id)
    if (user?.token?.token === token) {
      req.user = decodeToken
      next()
    } else if (user?.token?.token !== token || !token) {
      return res.status(403).json('User unauthorized')
    } else if (
      checkTime(
        new Date(user.token.created_at),
        new Date(),
        config.user_token_expiress_time
      )
    ) {
      authServices.clearTokenUser(user.id)
      return res.status(403).json('User unauthorized')
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}