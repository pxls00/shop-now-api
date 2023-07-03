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

    const pagination = []
    if (!isNaN(query.limit)) {
      pagination.push({ $limit: Number(query.limit) })
    } else if (!isNaN(query.skip)) {
      pagination.push({ $skip: Number(query.skip) })
    }

    const aggregation = await Company.aggregate([
      { $match: { name: new RegExp(query.search, 'i') } },
      { $sort: sortOption },
      {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: pagination,
        },
      },
    ])
    const count = aggregation[0].metadata[0].total
    const result = aggregation[0].data
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
