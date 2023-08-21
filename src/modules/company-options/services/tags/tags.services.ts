import CompanyTag from '../../models/tags/company-tag.model'

import type {
  ICompanyTagDocument,
  ICompanyTagBaseFields,
} from '../../models/tags/company-tag.types'

class CompanyTagService {
  public async getCompanyTagList(): Promise<ICompanyTagDocument[]> {
    return await CompanyTag.find({})
  }

  public async getCompanyTagById(
    id: string
  ): Promise<ICompanyTagDocument | undefined | null> {
    const companyTag = await CompanyTag.findById(id)
    return companyTag
  }

  public async createCompanyTag(fields: ICompanyTagBaseFields) {
    const isCompanyTagExists = await CompanyTag.findOne({
      name: fields.name,
    })

    if (isCompanyTagExists) {
      return undefined
    }

    const companyTag = new CompanyTag(fields)
    await companyTag.save()
    return companyTag
  }

  public async updateCompanyTagById(
    id: string,
    updatePayload: ICompanyTagBaseFields
  ) {
    const companyTag = await CompanyTag.findByIdAndUpdate(
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
    const tagItem = await CompanyTag.findByIdAndDelete(id)
    if (tagItem) {
      return tagItem
    }
    return undefined
  }
}

export default new CompanyTagService()
