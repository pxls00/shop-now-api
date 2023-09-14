import { UserModel } from '..'
import { hashPassword } from '../../../../utils/hashPassword'
import type {
  IUserFieldsBase,
  IUserDocument,
} from '../../../../models/user/index.types'
import type { Document } from 'mongoose'
import { IUpdateUserModel } from './user.types'

class UserSevices {
  public async getUserList(): Promise<any[]> {
    const users = await UserModel.find()
    return users
  }

  public async getUserById(
    id: number | string
  ): Promise<IUserDocument | undefined | null> {
    const user = await UserModel.findById(id)
    return user
  }

  public async createUser(fields: IUserFieldsBase): Promise<IUserDocument> {
    const newUser = { ...fields } as IUserFieldsBase
    newUser.password = hashPassword(newUser.password)
    const user = new UserModel(newUser)
    ;(await user.save()) as Document<IUserDocument>
    return user
  }

  public async updateUser(
    id: string,
    fields: IUpdateUserModel
  ): Promise<IUserDocument | undefined | null> {
    return await UserModel.findByIdAndUpdate(id, fields, { new: true })
  }

  public async getUserByField(
    field: Partial<IUserFieldsBase>
  ): Promise<IUserDocument | undefined | null> {
    return await UserModel.findOne(field)
  }
}

export default new UserSevices()
