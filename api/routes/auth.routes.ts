import authController from "../app/controllers/auth.controller"
import registerRequest from "../app/requests/register.request"
import loginRequest from "../app/requests/login.request"
import {authMiddleware} from "../utils/auth.utils"
import {Router} from 'express'

const authRoutes = Router()

authRoutes.post('/password', authMiddleware, authController.updatePassword)
authRoutes.post('/register', registerRequest, authController.register)
authRoutes.post('/login', loginRequest, authController.login)

export default authRoutes