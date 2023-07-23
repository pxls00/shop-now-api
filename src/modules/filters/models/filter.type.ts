import type { Document } from 'mongoose'
import type {IFilterBrandDocument} from './brands/filter-brands.type' 
import type {IFilterColorDocument} from './colors/filter-color.type'
import type {IFilterOptionDocument} from './options/filter-option.type' 

// Enums

// Types

// Interfaces
interface IFilterOptions {
  color: IFilterBrandDocument[],
  brands: IFilterColorDocument[],
  custom_optoins: IFilterOptionDocument[]
}

export interface IFilterDocument extends Document {
  name: string,
  categories: string[],
  filter_options: IFilterOptions
}
