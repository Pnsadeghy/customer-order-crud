import orderController from "../app/controllers/order.controller"
import {Router} from 'express'


const orderRoutes = Router()

orderRoutes.get('/', orderController.index);
orderRoutes.post('/', orderController.store);
orderRoutes.get('/:id', orderController.show);
orderRoutes.put('/:id', orderController.update);
orderRoutes.delete('/:id', orderController.destroy);

export default orderRoutes