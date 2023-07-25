import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces
export interface IFilterOptionBaseFields {
  name: string
  category_id: [string]
  value: string[]
  key: string
}

export interface IFilterOptionDocument
  extends IFilterOptionBaseFields,
    Document {}
