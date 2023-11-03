import CompanyTagModel from '../../../../models/company-tag/index.model'

import type { FilterQuery } from 'mongoose'
import type {
  IPaginationOptionsQuery,
  ISearchSystemTagsRes,
} from '../../../controllers/search-systems/index.types'
import type { ICompanyTagDocument } from '../../../../models/company-tag/index.types'

class SearchSystemCompanyService {
  public async getCompanyTagList(
    queryOption: FilterQuery<IPaginationOptionsQuery>
  ): Promise<ISearchSystemTagsRes<ICompanyTagDocument>> {
    const pagination = []
    if (!isNaN(queryOption.limit)) {
      pagination.push({ $limit: Number(queryOption.limit) })
    }
    if (!isNaN(queryOption.skip)) {
      pagination.push({ $skip: Number(queryOption.skip) })
    }

    const tags = await CompanyTagModel.aggregate([
      { $match: { name: new RegExp(queryOption.search, 'i') } },
      {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: pagination,
        },
      },
    ])

    const count = tags[0].metadata[0].total as number
    const result = tags[0].data as ICompanyTagDocument[]

    return {
      data: result,
      total_count: count,
      has_next_page:
        count > Number(queryOption.skip) + Number(queryOption.limit),
    }
  }
}

export default new SearchSystemCompanyService()
