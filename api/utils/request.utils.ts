import { Response } from 'express'

export const errorResponse = (res: Response, errorCode: number, message: string = "") =>
    res.status(errorCode).json({message})