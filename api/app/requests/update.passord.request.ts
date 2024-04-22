import { body } from 'express-validator'

const updatePasswordRequest = [
    body('current').isLength({ min: 6 }).withMessage('Current password must be at least 6 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]

export default updatePasswordRequest