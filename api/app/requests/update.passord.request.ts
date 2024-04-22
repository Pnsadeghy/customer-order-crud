import { body } from 'express-validator'
import i18n from "../../localization";

const updatePasswordRequest = [
    body('current').isLength({ min: 6 }).withMessage(  body('password').isLength({ min: 6 }).withMessage(i18n.__("validation.minLength", {
        field: i18n.__("label.current_password"),
        min: 6
    }))),
    body('password').isLength({ min: 6 }).withMessage(  body('password').isLength({ min: 6 }).withMessage(i18n.__("validation.minLength", {
        field: i18n.__("label.password"),
        min: 6
    })))
]

export default updatePasswordRequest