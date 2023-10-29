import jwt from 'jsonwebtoken'
import config from '../../../lib/default'
import { UserServices } from '../../modules/user/index'
import AuthServices from '../../services/auth/auth.services'
import checkTime from '../../modules/auth/utils/check-time'

import type { Request, Response, NextFunction } from 'express'
import type { IGenerateAccessTokenPayload } from '../../modules/auth/services/auth.types'

const userServices = UserServices
const authServices = AuthServices

interface IRequestType extends Request {
  user?: Partial<IGenerateAccessTokenPayload>
}

export default async function (
  req: IRequestType,
  res: Response,
  next: NextFunction
) {
  try {
    const pureToken = req.headers.authorization?.split(' ')[1] as string

    const decodedTokenUser = await authServices.decodeTokenUser(pureToken) as IGenerateAccessTokenPayload
    
    const userByTokenUserId = await userServices.getUserById(decodedTokenUser.id) 
    
    if (!userByTokenUserId) {
      return res.status(404).json('User is not defined')
    }

    const comparedToken = authServices.checkTokenUser(pureToken, userByTokenUserId.token.token as string | undefined)
    
    if (comparedToken) {
      req.user = decodedTokenUser
      next()
    } else if (userByTokenUserId?.token?.token !== pureToken || !pureToken) {
      req.user = undefined
      return res.status(403).json('User unauthorized')
    } else if (
      checkTime(
        new Date(userByTokenUserId.token.created_at),
        new Date(),
        config.user_token_expiress_time
      )
    ) {
      authServices.clearTokenUser(userByTokenUserId.id)
      req.user = undefined
      return res.status(403).json('User unauthorized')
    }
  } catch (error) {
    res.status(403).json('User unauthorized')
  }
}


// Fix token.token problem then i was changing current code to cleaner code 