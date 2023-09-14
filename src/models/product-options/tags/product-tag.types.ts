import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces
export interface IProductTagBaseFields {
  name: string
  category_id: string[]
}

export interface IProductTagDocument extends IProductTagBaseFields, Document {}
