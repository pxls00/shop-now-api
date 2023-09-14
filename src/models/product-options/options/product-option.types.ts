import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces
export interface IProductOptionBaseFields {
  name: string
  category_id: [string]
  value: string[]
  key: string
}

export interface IProductOptionDocument
  extends IProductOptionBaseFields,
    Document {}
