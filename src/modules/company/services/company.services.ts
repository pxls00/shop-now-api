import type { IQueryOptions } from '../controllers/company.types'
import type {
  ISortOption,
  IGetCompanyListRes,
  IGetCompanyByIdRes,
} from './company.types'
import type { ICompanyDocument } from '../models/company.types'
import type { FilterQuery } from 'mongoose'

import Companies from '../models/company.model'

class CompanyServices {
  public async getCompanyList(
    query: FilterQuery<IQueryOptions>
  ): Promise<IGetCompanyListRes> {
    const sortOption = {} as ISortOption
    sortOption[query.sortOption.key] = query.sortOption.value
    const result: ICompanyDocument[] = await Companies.find({
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
    query: FilterQuery<ICompanyDocument>
  ): Promise<Partial<IGetCompanyByIdRes>> {
    const data = (await Companies.findById(query.id)) as
      | ICompanyDocument
      | undefined
    return {
      data,
    }
  }
}

export default new CompanyServices()
