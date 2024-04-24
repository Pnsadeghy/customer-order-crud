import orderController from "../app/controllers/order.controller"
import paginateRequest from "../app/requests/paginate.request"
import orderRequest from "../app/requests/order.request"
import {Router} from 'express'

const orderRoutes = Router()

orderRoutes.get('/', paginateRequest, orderController.index)
orderRoutes.post('/', orderRequest, orderController.store)
orderRoutes.get('/:id', orderController.show)
orderRoutes.put('/:id', orderRequest, orderController.update)
orderRoutes.delete('/:id', orderController.destroy)

export default orderRoutes