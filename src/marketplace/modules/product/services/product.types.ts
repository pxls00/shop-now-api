import type { IProductDocument } from '../../../../models/product/index.types'
import type { QuerySelector } from 'mongoose'

// Interfaces

export type TQueryGetOptions = {
  [$key in keyof IProductDocument]: IQueryGetOption<string | string[][]>
}

export type IQueryGetOption<T> = {
  [$key in keyof QuerySelector<T>]: T
}

export interface IQueryGetOptionCustom {
  [$key: Partial<string>]: IQueryGetOption<string>
}
