import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces

export interface IUserFieldsBase {
  name: string
  email: string
  password: string
}

export interface IUserTokenField {
  token: string
  created_at: Date
}

export interface IUserDocument extends IUserFieldsBase, Document {
  logo_img: string
  created_at: Date
  followings: string[]
  token?: IUserTokenField
}
