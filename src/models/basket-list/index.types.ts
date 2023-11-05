import type { Document } from 'mongoose'
import type { IUserDocument } from '../user/index.types'
import type { IOrderedProductDocument } from '../product/index.types'
// Enums

// Types

// Interfaces

export interface IOrderBasketList extends Document {
  user: IUserDocument,
  totalPrice: number,
  products: IOrderedProductDocument[]
}