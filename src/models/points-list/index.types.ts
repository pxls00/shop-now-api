// Enums
import type { Document } from 'mongoose'

// Types

// Interfaces
export interface IPointLocationDegrees {
  lng: string
  ltd: string
}

export interface IPointLocation {
  city: string
  district: string
  orientation: string
  degrees: IPointLocationDegrees
}

export interface IPoinWorkTime {
  work_time: string
  non_working_days?: string
}

export interface IPointRelatedAdmin {
  email: string
  name: string
}
export interface IPointItem {
  location: IPointLocation
  worktime: IPoinWorkTime
  created_at?: Date
  // temporarily
  related_admin: IPointRelatedAdmin
}

export interface IPointItemDocument extends Document {}
