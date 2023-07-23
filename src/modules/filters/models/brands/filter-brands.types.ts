import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces
export interface IFilterBrandBaseFields {
  name: string
  key: string
}

export interface IFilterBrandDocument
  extends IFilterBrandBaseFields,
    Document {}
