import { body } from 'express-validator'

const paginateRequest = [
    body('page').optional().isNumeric(),
    body('limit').optional().isNumeric()
]

export default paginateRequest