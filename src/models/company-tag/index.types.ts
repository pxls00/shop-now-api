import type { Document } from 'mongoose'

// Enums

// Types

// Interfaces
export interface ICompanyTagBaseFields {
  name: string
}

export interface ICompanyTagDocument extends ICompanyTagBaseFields, Document {}
