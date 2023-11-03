import ProductTagModel from '../../../../models/product-options/tags/product-tag.model'

import type { FilterQuery } from 'mongoose'
import type {
  IPaginationOptionsQuery,
  ISearchSystemTagsRes,
} from '../../../controllers/search-systems/index.types'
import type { IProductTagDocument } from '../../../../models/product-options/tags/product-tag.types'

class SearchSystemProductService {
  public async getProductTagList(
    queryOption: FilterQuery<IPaginationOptionsQuery>
  ): Promise<ISearchSystemTagsRes<IProductTagDocument>> {
    const pagination = []
    if (!isNaN(queryOption.limit)) {
      pagination.push({ $limit: Number(queryOption.limit) })
    }
    if (!isNaN(queryOption.skip)) {
      pagination.push({ $skip: Number(queryOption.skip) })
    }

    const tags = await ProductTagModel.aggregate([
      { $match: { name: new RegExp(queryOption.search, 'i') } },
      {
        $facet: {
          metadata: [{ $count: 'total' }],
          data: pagination,
        },
      },
    ])

    const count = tags[0].metadata[0].total as number
    const result = [] as IProductTagDocument[]

    tags[0].data.forEach((item: IProductTagDocument) => {
      if (result && Array.isArray(result)) {
        if (
          result.some((tag) =>
            tag.category_id.includes(
              item.category_id[item.category_id.length - 1]
            )
          )
        ) {
          return
        }
        return result.push(item)
      }
    })

    return {
      data: result,
      total_count: count,
      has_next_page:
        count > Number(queryOption.skip) + Number(queryOption.limit),
    }
  }
}

export default new SearchSystemProductService()
