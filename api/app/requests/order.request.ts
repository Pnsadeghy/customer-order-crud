import { body } from 'express-validator'
import i18n from "../../localization"

const orderRequest = [
    body('customer').notEmpty(),
    body('address').notEmpty(),
    body('date').isDate(),
    body('items').notEmpty().isArray(),
    body('items.*.product').notEmpty(),
    body('items.*.quantity').isNumeric(),
    body('items.*.price').isNumeric()
]

export default orderRequest