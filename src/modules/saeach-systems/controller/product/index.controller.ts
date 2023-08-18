import productServices from '../../services/product/index.services'

import type { IPaginationOptionsQuery } from '../index.types'
import type { Request, Response } from 'express'

const productTagServices = productServices

class CompanyTagsController {
  public async getProductTagList(req: Request, res: Response) {
    try {
      const {search, limit, skip} = req.query as unknown as IPaginationOptionsQuery
      const productTags = await productTagServices.getProductTagList({search, limit, skip})

      return res.status(200).json(productTags)
    } catch (error) {
      return res.json(error)
    }
  }
}

export default CompanyTagsController
