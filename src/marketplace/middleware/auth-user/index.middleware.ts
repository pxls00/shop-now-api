import config from '../../../lib/default'
import UserServices from '../../services/user/user.services'
import AuthServices from '../../services/auth/auth.services'
import checkTime from '../../modules/auth/utils/check-time'

// Types
import type { Request, Response, NextFunction } from 'express'
import type { IGenerateAccessTokenPayload } from '../../services/auth/auth.types'

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
    
    // if user doesn't exist or his token 
    if (!userByTokenUserId || !userByTokenUserId.token) {
      return res.status(403).json('User unauthorized')
    }

    // check user's token and pure token
    const comparedToken = authServices.checkTokenUser(pureToken, userByTokenUserId.token.token as string)

    if (comparedToken) {
      // if token is correct set local user
      req.user = decodedTokenUser

      next()
    } else if (!comparedToken || !pureToken) {
      // clear local user
      req.user = undefined

      return res.status(403).json('User unauthorized')
    } else if (
      // check expires time
      checkTime(
        new Date(userByTokenUserId.token.created_at),
        new Date(),
        config.user_token_expiress_time
      )
    ) {
      // clear token of user
      userServices.clearTokenUser(userByTokenUserId.id)

      // clear local user
      req.user = undefined

      return res.status(403).json('User unauthorized')
    }
    
  } catch (error) {
    res.status(403).json('User unauthorized')
  }
}