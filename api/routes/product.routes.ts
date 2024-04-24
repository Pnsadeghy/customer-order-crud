import productController from "../app/controllers/product.controller"
import {Router} from 'express'

const productRoutes = Router()

productRoutes.get('/', productController.index)

export default productRoutes