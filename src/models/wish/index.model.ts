import { Schema, model } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

import type { IWishDocument } from './index.types'

const Wishes = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
      autopopulate: true,
    },
    wishes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'products',
        autopopulate: true,
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

Wishes.plugin(autopopulate)

const Wish = model<IWishDocument>('wishes', Wishes)

export default Wish
