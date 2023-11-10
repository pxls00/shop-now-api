import { Router } from 'express'
import config from '../../lib/config'
import PointsController from '../../../../controllers/points/points.controller'

const router = Router()

const controller = new PointsController()

// tags
router.get(`${config.moduleRouteTagURL}`, controller.getPointsList)
router.get(`${config.moduleRouteTagURL}/:${config.moduleRouteTagItemIdURL}`, controller.getPointById)

router.post(
  `${config.moduleRouteTagURL}`,
  controller.createPointItem
)

export default router
