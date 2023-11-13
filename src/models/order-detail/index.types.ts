import type { Document } from 'mongoose'
import type { IUserDocument } from '../user/index.types'

// Enums

// Types
type TOrderGetProductTypes = 'deliver-to-door' | 'pick-up-point'
type TOrderStatus = "cancelled" | "sold" | "ordered" | "ready"
// Interfaces

export interface IOrderDetailFields {
  price: number
  get_product: TOrderGetProductTypes
  status: TOrderStatus
  order_id: string
  has_paid: boolean
  user: IUserDocument
  products_length: number
  order_detail_id: string
  order_info_id: string
}

export interface IOrderDetailDocument extends IOrderDetailFields, Document {
  created_at: Date
}
