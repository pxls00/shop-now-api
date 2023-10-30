import { Schema, model } from 'mongoose'

import type { IUserDocument } from './index.types'

const UserSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  logo_img: {
    type: String,
    default: '',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  followings: {
    type: [String],
    dafault: [],
  },
  token: {
    token: {
      type: String,
      default: '',
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
})

UserSchema.post('find', function (docs) {
  for (const doc of docs) {
    doc.token = undefined
    doc.followings = undefined
    doc.password = undefined
  }
})

// UserSchema.post('findOne', function (doc) {
//   doc.password = undefined
// })

const User = model<IUserDocument>('users', UserSchema)

export default User
