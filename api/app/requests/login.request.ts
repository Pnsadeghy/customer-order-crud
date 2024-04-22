import { body } from 'express-validator'
import i18n from "../../localization"

const loginRequest = [
    body('username').notEmpty().withMessage(i18n.__("validation.auth.username")),
    body('password').isLength({ min: 6 }).withMessage(i18n.__("validation.auth.password"))
]

export default loginRequest