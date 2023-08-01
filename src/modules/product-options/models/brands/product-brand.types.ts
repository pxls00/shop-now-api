import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces
export interface IProductBrandBaseFields {
  name: string
  key: string
  category_id: string[]
}

export interface IProductBrandDocument
  extends IProductBrandBaseFields,
    Document {}
