import authRoutes from "../routes/auth.routes"
import {Router} from "express"

const router = Router()

router.use('/api/auth', authRoutes)

export default router