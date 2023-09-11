import type { Document } from 'mongoose'
import type { IUserDocument } from '../user/index.types'
import type { IProductDocument } from '../product/index.types'
// Enums

// Types

// Interfaces

export interface IWishDocument extends Document {
  user: IUserDocument
  wishes: IProductDocument[]
}
