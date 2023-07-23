import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces

export interface IFilterColorBaseFields {
  name: string
  key: string
}

export interface IFilterColorDocument
  extends IFilterColorBaseFields,
    Document {}
