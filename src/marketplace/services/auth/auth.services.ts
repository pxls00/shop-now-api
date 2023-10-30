import jwt from 'jsonwebtoken'
import config from '../../../lib/default'
// import { UserServices } from '..'

import type { SignOptions } from 'jsonwebtoken'
import type { IGenerateAccessTokenPayload } from './auth.types'
import type { IUserTokenField } from '../../../models/user/index.types'

// const userServices = UserServices

class AuthServices {
  public geenrateAccessToken({
    id,
    name,
    email,
  }: IGenerateAccessTokenPayload): string {
    const payload = {
      id,
      name,
      email,
    } as IGenerateAccessTokenPayload as SignOptions
    return jwt.sign(payload, config.secret_key_for_auth, {
      expiresIn: config.user_token_expiress_time,
    })
  }

  public setTokenUser(
    payload: IGenerateAccessTokenPayload
    // ): Promise<IUserDocument | undefined | null> {
  ): IUserTokenField {
    const token: IUserTokenField = {
      token: this.geenrateAccessToken(payload),
      created_at: new Date(),
    }

    // const user = await userServices.updateUser(payload.id, { token })

    // return user
    return token
  }

  public async decodeTokenUser(
    accessibleToken: string
  ): Promise<IGenerateAccessTokenPayload> {
    const decodedToken = jwt.verify(
      accessibleToken,
      config.secret_key_for_auth
    ) as IGenerateAccessTokenPayload

    return decodedToken
  }

  public checkTokenUser(
    accessibleToken: string,
    currentToken: string | undefined
  ): boolean {
    return accessibleToken === currentToken
  }

  // public async clearTokenUser(id: string): Promise<void> {
  //   const user = await userServices.getUserById(id)
  //   if (user) {
  //     user.token = undefined
  //     user.save()
  //   }
  // }
}

export default new AuthServices()
