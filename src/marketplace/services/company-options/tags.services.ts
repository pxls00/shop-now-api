import CompanyTagModel from '../../../models/company-tag/index.model'

import type {
  ICompanyTagDocument,
  ICompanyTagBaseFields,
} from '../../../models/company-tag/index.types'

class CompanyTagService {
  public async getCompanyTagList(): Promise<ICompanyTagDocument[]> {
    return await CompanyTagModel.find({})
  }

  public async getCompanyTagById(
    id: string
  ): Promise<ICompanyTagDocument | undefined | null> {
    const companyTag = await CompanyTagModel.findById(id)
    return companyTag
  }

  public async createCompanyTag(fields: ICompanyTagBaseFields) {
    const isCompanyTagExists = await CompanyTagModel.findOne({
      name: fields.name,
    })

    if (isCompanyTagExists) {
      return undefined
    }

    const companyTag = new CompanyTagModel(fields)
    await companyTag.save()
    return companyTag
  }

  public async updateCompanyTagById(
    id: string,
    updatePayload: ICompanyTagBaseFields
  ) {
    const companyTag = await CompanyTagModel.findByIdAndUpdate(
      id,
      { name: updatePayload.name },
      { new: true }
    )
    if (!companyTag) {
      return undefined
    }
    return companyTag
  }

  public async deleteCompanyTagById(id: string) {
    const tagItem = await CompanyTagModel.findByIdAndDelete(id)
    if (tagItem) {
      return tagItem
    }
    return undefined
  }
}

export default new CompanyTagService()
