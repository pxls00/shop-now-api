import type { Document } from 'mongoose'
import type { IUserDocument } from '../../user/models/user.types'
import type { IProductDocument } from '../../product/models/product.types'
// Enums

// Types

// Interfaces

export interface IWishDocument extends Document {
  user: IUserDocument
  wishes: IProductDocument[]
}
