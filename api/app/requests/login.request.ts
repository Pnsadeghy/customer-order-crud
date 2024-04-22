import { body } from 'express-validator'

const loginRequest = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
]

export default loginRequest