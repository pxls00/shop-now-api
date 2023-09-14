import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces

export interface ICategoryFieldsBase {
  name: string
  key: string
}

export interface ICategoryDocument extends ICategoryFieldsBase, Document {
  nested_categories: ICategoryDocument[]
  created_at: Date
}
