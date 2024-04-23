import { Request, Response, NextFunction } from 'express'
import jwt from "jsonwebtoken"
import {type UserDocument} from "../app/models/user.model";

declare global {
    namespace Express {
        interface Request {
            user?: string
        }
    }
}

export const generateAuthToken = (user: UserDocument) => {
    return jwt.sign(user._id!.toString(), process.env.TOKEN_SECRET!)
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}