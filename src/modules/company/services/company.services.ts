import type { IQueryOptions } from '../controllers/company.types'
import type { ISortOption, IGetCompanyListRes } from './company.types'
import type {
  ICompanyDocument,
  ICompanyFieldsBase,
} from '../models/company.types'
import type { Document, FilterQuery } from 'mongoose'

import Company from '../models/company.model'

class CompanyServices {
  public async getCompanyList(
    query: FilterQuery<IQueryOptions>
  ): Promise<IGetCompanyListRes> {
    const sortOption = {} as ISortOption
    sortOption[query.sortOption.key] = query.sortOption.value
    const result: ICompanyDocument[] = await Company.find({
      name: new RegExp(query.search, 'i'),
    })
      .sort(sortOption)
      .skip(Number(query.skip))
      .limit(Number(query.limit))
      .exec()
    const count: number = result.length
    return {
      data: result,
      total_count: count,
      has_next_page: count > Number(query.skip) + Number(query.limit),
    }
  }

  public async getCompanyById(
    id: string
  ): Promise<ICompanyDocument | undefined | null> {
    return await Company.findById(id)
  }

  public async getCompanyByField(
    field: Partial<ICompanyFieldsBase>
  ): Promise<ICompanyDocument | undefined | null> {
    return await Company.findOne(field)
  }

  public async createCompany(
    fields: ICompanyFieldsBase
  ): Promise<ICompanyDocument> {
    const newCompany = { ...fields } as ICompanyFieldsBase
    const company = new Company(newCompany)
    ;(await company.save()) as Document<ICompanyDocument>
    return company
  }
}

export default new CompanyServices()
