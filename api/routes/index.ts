import {authMiddleware} from "../utils/auth.utils"
import productRoutes from "./product.routes"
import orderRoutes from "./order.routes"
import authRoutes from "./auth.routes"
import {Router} from "express"

const index = Router()

index.use('/api/auth', authRoutes)
index.use('/api/order', authMiddleware, orderRoutes)
index.use('/api/product', authMiddleware, productRoutes)

export default index