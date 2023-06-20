import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces
export interface IRateItem {
  name: string
  rate: number
  user_id: string | number
}

export interface IUserItem {
  name: string
  user_id: string | number
  logo_img: string
}

export interface IReviewCommentItem {
  user: {
    name: string
    user_id: string | number
    logo_img: string
  }
  body: string
  created_at: Date
}

export interface ICompanyDocument extends Document {
  name: string
  logo_img: string
  description: string
  created_at: Date
  orders_count: number
  rate: Array<IRateItem>
  followers: Array<IUserItem>
  review_comments: Array<IReviewCommentItem>
  banner_img: string
}
