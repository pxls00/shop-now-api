import { validationResult } from 'express-validator'
import { UserServices } from '../../user/index'
import { WishServices } from '../../wishes'

import AuthServices from '../services/auth.services'

import type { Request, Response } from 'express'
import type { IRequestAuthenticated } from '../../../types/index.types'
import type { IRegisterBodyRequest } from './auth.types'
import type { IGenerateAccessTokenPayload } from '../services/auth.types'
import type { IUserFieldsBase } from '../../user/models/user.types'
import { comparePassword } from '../../../../utils/hashPassword'

const userServices = UserServices
const authServices = AuthServices
const wishServices = WishServices

class AuthController {
  public async register(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { email, name, password } = req.body as IRegisterBodyRequest
      const isUserExistsWithGivenEmail = await userServices.getUserByField({
        email,
      })

      if (
        isUserExistsWithGivenEmail &&
        Object.keys(isUserExistsWithGivenEmail).length
      ) {
        return res
          .status(409)
          .json({ message: 'User with this email already exists' })
      }

      const userFields: IUserFieldsBase = {
        email,
        name,
        password,
      }

      const createdUser = await userServices.createUser(userFields)

      const tokenPayload: IGenerateAccessTokenPayload = {
        id: createdUser.id,
        email: createdUser.email,
        name: createdUser.name,
      }

      const authenticatedUser = await authServices.setTokenUser(tokenPayload)

      await wishServices.createWish(createdUser.id)

      return res.status(201).json(authenticatedUser)
    } catch (error) {
      return res.status(400).json({ message: 'Registration error', error })
    }
  }

  // public registerConfirm(req: Request, res:Response) {}
  public async login(req: Request, res: Response) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json(errors)
      }

      const { email, password } = req.body
      const user = await userServices.getUserByField({ email })

      if (!user) {
        return res
          .status(409)
          .json({ message: 'User with this email does not exist' })
      } else {
        const validPassword = comparePassword(password, user.password)

        if (!validPassword) {
          return res
            .status(409)
            .json({ message: `User's password is incorrect` })
        } else {
          const tokenPayload: IGenerateAccessTokenPayload = {
            id: user.id,
            email: user.email,
            name: user.name,
          }
          const authenticatedUser = await authServices.setTokenUser(
            tokenPayload
          )

          return res.json({ token: authenticatedUser?.token?.token })
        }
      }
    } catch (error) {
      return res.status(400).json({ message: 'Authentication error', error })
    }
  }

  public async logout(req: IRequestAuthenticated, res: Response) {
    try {
      await authServices.clearTokenUser(req.user?.id as string)
      return res.status(204).json({ message: 'Logged out' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  // public logOut(req: Request, res: Response) {}
  // public delete
}

export default AuthController
