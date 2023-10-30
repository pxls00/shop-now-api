import { validationResult } from 'express-validator'
// import { WishServices } from '..'
import UserServices from '../../services/user/user.services'
import AuthServices from '../../services/auth/auth.services'

import { comparePassword } from '../../../utils/hashPassword'

import type { Request, Response } from 'express'
import type { IRequestAuthenticated } from '../../types/index.types'
import type { IRegisterBodyRequest } from './auth.types'
import type { IGenerateAccessTokenPayload } from '../../services/auth/auth.types'
import type {
  IUserFieldsBase,
  IUserDocument,
} from '../../../models/user/index.types'

const userServices = UserServices
const authServices = AuthServices
// const wishServices = WishServices

class AuthController {
  public async register(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      // check errors of body validation
      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { email, name, password } = req.body as IRegisterBodyRequest

      // get user by email
      const isUserExistsWithGivenEmail = await userServices.getUserByField({
        email,
      })

      // check is user does exist with given email
      if (
        isUserExistsWithGivenEmail &&
        Object.keys(isUserExistsWithGivenEmail).length
      ) {
        return res
          .status(409)
          .json({ message: 'User with this email already exists' })
      }

      // if doesn't exist create user with base fields
      const userFields: IUserFieldsBase = {
        email,
        name,
        password,
      }

      // create user
      const createdUser = await userServices.createUser(userFields)

      // token steps, create tokenPayload by created user's id
      const tokenPayload: IGenerateAccessTokenPayload = {
        id: createdUser.id,
        email: createdUser.email,
        name: createdUser.name,
      }

      // set user token payload
      const getCreatedTokenByTokenPayload =
        authServices.setTokenUser(tokenPayload)

      const authenticatedUser = await userServices.setTokenUser(
        tokenPayload.id,
        getCreatedTokenByTokenPayload
      )

      // await wishServices.createWish(createdUser.id)

      return res.status(201).json(authenticatedUser)
    } catch (error) {
      return res.status(400).json({ message: 'Registration error', error })
    }
  }

  // public registerConfirm(req: Request, res:Response) {}
  public async login(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      // check errors of body validation
      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { email, password } = req.body

      // get user by email
      const user = await userServices.getUserByField({ email })

      // check user does exist by given email
      if (!user) {
        return res
          .status(409)
          .json({ message: 'User with this email does not exist' })
      } else {
        // if exists so compare given password with user.password
        const validPassword = comparePassword(password, user.password)

        if (!validPassword) {
          return res
            .status(409)
            .json({ message: `User's password is incorrect` })
        } else {
          // token steps, create tokenPayload by verificated user's id
          const tokenPayload: IGenerateAccessTokenPayload = {
            id: user.id,
            email: user.email,
            name: user.name,
          }

          // set user token payload
          const getCreatedTokenByTokenPayload =
            authServices.setTokenUser(tokenPayload)

          const authenticatedUser = (await userServices.setTokenUser(
            tokenPayload.id,
            getCreatedTokenByTokenPayload
          )) as IUserDocument

          // token field definitely exists
          if (!authenticatedUser.token) {
            throw new Error('Authentication error')
          }

          return res.json({ token: authenticatedUser.token.token as string })
        }
      }
    } catch (error) {
      return res.status(400).json({ message: 'Authentication error', error })
    }
  }

  public async logout(req: IRequestAuthenticated, res: Response) {
    try {
      await userServices.clearTokenUser(req.user?.id as string)

      return res.status(204).json({ message: 'Logged out' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}

export default AuthController
