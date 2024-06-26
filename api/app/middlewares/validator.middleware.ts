import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

const validatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    return res.status(422).json({
        errors: errors,
    })
}

export default validatorMiddleware
