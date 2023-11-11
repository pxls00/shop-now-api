import PointsModel from '../../../models/points-list//index.model'

import type {
  IPointItemDocument,
  IPointItem,
} from '../../../models/points-list/index.types'

class PointsService {
  public async getPointsList(): Promise<IPointItemDocument[]> {
    return await PointsModel.find({})
  }

  public async getPointsById(
    id: string
  ): Promise<IPointItemDocument | undefined | null> {
    const pointItem = await PointsModel.findById(id)
    return pointItem
  }

  public async createPoint(
    fields: IPointItem
  ): Promise<IPointItemDocument | undefined | null> {
    const isPointExists = await PointsModel.findOne({
      'related_admin.email': fields.related_admin.email,
    })

    if (isPointExists) {
      return
    }

    const pointItem = new PointsModel(fields)
    await pointItem.save()

    return pointItem
  }

  public async deletePointByid(id: string) {
    const pointItem = await PointsModel.findByIdAndDelete(id)
    if (pointItem) {
      return pointItem
    }
    return undefined
  }
}

export default new PointsService()
