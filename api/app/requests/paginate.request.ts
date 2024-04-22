import { body } from 'express-validator'

const orderRequest = [
    body('page').isNumeric(),
    body('limit').isNumeric(),
]

export default orderRequest