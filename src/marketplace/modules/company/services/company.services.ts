import type { IQueryOptions } from '../controllers/company.types'
import type { ISortOption, IGetCompanyListRes } from './company.types'
import type {
  ICompanyDocument,
  ICompanyFieldsBase,
} from '../../../../models/company/index.types'
import type { FilterQuery } from 'mongoose'

import { CompanyModel } from '..'

class CompanyServices {
  public async getCompanyList(
    query: FilterQuery<IQueryOptions>
  ): Promise<IGetCompanyListRes> {
    const sortOption = {} as ISortOption
    sortOption[query.sortOption.key] = query.sortOption.value

    const pagination = []
    if (!isNaN(query.limit)) {
      pagination.push({ $limit: Number(query.limit) })
    }
    if (!isNaN(query.skip)) {
      pagination.push({ $skip: Number(query.skip) })
    }

    const aggregation = await CompanyModel.aggregate([
      {
        $match: {
          tag_names: { $regex: new RegExp(query.search, 'i') },
        },
      },
      {
        $addFields: {
          followers_count: { $size: '$followers' },
          rate_base: {
            $ifNull: [{ $avg: '$rate.rate_base' }, 5],
          },
        },
      },
      { $sort: sortOption },
      { $unset: ['followers', 'rate'] },
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
    return await CompanyModel.findById(id)
  }

  public async getCompanyByField(
    field: Partial<ICompanyFieldsBase>
  ): Promise<ICompanyDocument | undefined | null> {
    return await CompanyModel.findOne(field)
  }

  // public async createCompany(
  //   fields: ICompanyFieldsBase
  // ): Promise<ICompanyDocument> {
  //   const newCompany = { ...fields } as ICompanyFieldsBase
  //   const company = new CompanyModel(newCompany)
  //   ;(await company.save()) as Document<ICompanyDocument>
  //   return company
  // }
}

export default new CompanyServices()
