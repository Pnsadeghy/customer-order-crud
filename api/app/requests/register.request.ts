import { body } from 'express-validator'
import i18n from "../../localization"

const registerRequest = [
    body('username').notEmpty().withMessage(i18n.__("validation.auth.username")),
    body('email').isEmail().withMessage(i18n.__("validation.auth.email")),
    body('password').isLength({ min: 6 }).withMessage(i18n.__("validation.auth.password"))
]

export default registerRequest