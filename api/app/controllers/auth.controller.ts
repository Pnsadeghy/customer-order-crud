import authRepository from "../repositories/auth.repository"
import {errorResponse} from "../../utils/request.utils"
import {generateAuthToken} from "../../utils/auth.utils"
import { Request, Response } from 'express'
import i18n from "../../localization"

const authController = {
    register: async (req: Request, res: Response) => {

        const { username, email, password }: {
            username: string
            email: string
            password: string
        } = req.body

        if (await authRepository.isUserRegistered(username, email))
            return errorResponse(res, 400, i18n.__("validation.auth.exists"))

        const newUser = await authRepository.register(username, email, password)

        const token = generateAuthToken(newUser)

        res.status(201).json({ token })
    },
    login: async (req: Request, res: Response) => {
        const { username, password }: {
            username: string
            password: string
        } = req.body

        const user = await authRepository.findUser(username, password)

        if (user === null)
            return errorResponse(res, 401, i18n.__("validation.auth.failed"))

        const token = generateAuthToken(user)

        res.status(200).json({ token })
    },
    updatePassword: async (req: Request, res: Response) => {

        const { current, password }: {
            current: string
            password: string
        } = req.body

        const user = await authRepository.findUserById(req.user!)

        if (!await authRepository.checkUserPassword(user!, current))
            return errorResponse(res, 401, i18n.__("validation.auth.current"))

        await authRepository.updateUserPassword(user!, password)

        return res.json({})
    }
}

export default authController