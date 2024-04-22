import orderRoutes from "../routes/order.routes"
import authRoutes from "../routes/auth.routes"
import {Router} from "express"

const router = Router()

router.use('/api/auth', authRoutes)
router.use('/api/order', orderRoutes)

export default router