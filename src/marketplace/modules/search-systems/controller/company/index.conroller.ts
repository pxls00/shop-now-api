import companyServices from '../../services/company/index.services'

import type { IPaginationOptionsQuery } from '../index.types'
import type { Request, Response } from 'express'

const companyTagServices = companyServices

class CompanyTagsController {
  public async getCompanyTagList(req: Request, res: Response) {
    try {
      const { search, limit, skip } =
        req.query as unknown as IPaginationOptionsQuery
      const companyTags = await companyTagServices.getCompanyTagList({
        search,
        limit,
        skip,
      })

      return res.status(200).json(companyTags)
    } catch (error) {
      return res.json(error)
    }
  }
}

export default CompanyTagsController
