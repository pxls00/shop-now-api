import jwt from 'jsonwebtoken'
import config from '../../../lib/default'
import { UserServices } from '../../user/index'

import type { SignOptions } from 'jsonwebtoken'
import type { IGenerateAccessTokenPayload } from './auth.types'
import type {
  IUserTokenField,
  IUserDocument,
} from '../../user/models/user.types'

const userServices = UserServices

class AuthServices {
  public async geenrateAccessToken({
    id,
    name,
    email,
  }: IGenerateAccessTokenPayload): Promise<string> {
    const payload = {
      id,
      name,
      email,
    } as IGenerateAccessTokenPayload as SignOptions
    return await jwt.sign(payload, config.secret_key_for_auth, {
      expiresIn: config.user_token_expiress_time,
    })
  }

  public async setTokenUser(
    payload: IGenerateAccessTokenPayload
  ): Promise<IUserDocument | undefined | null> {
    const token: IUserTokenField = {
      token: await this.geenrateAccessToken(payload),
      created_at: new Date(),
    }
    const user = await userServices.updateUser(payload.id, { token })

    return user
  }

  public async clearTokenUser(id: string): Promise<void> {
    const user = await userServices.getUserById(id)
    if (user) {
      user.token = undefined
      user.save()
    }
  }
}

export default new AuthServices()
