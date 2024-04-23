import productRoutes from "./product.routes"
import orderRoutes from "./order.routes"
import authRoutes from "./auth.routes"
import {Router} from "express"

const index = Router()

index.use('/api/auth', authRoutes)
index.use('/api/order', orderRoutes)
index.use('/api/product', productRoutes)

export default index