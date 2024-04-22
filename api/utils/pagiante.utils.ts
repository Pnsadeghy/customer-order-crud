import listCollection from "../app/resources/list.collection"
import { Request, Response } from 'express'
import {Model, Document} from "mongoose"

export const paginateList = async (
    model: Model<any>,
    req: Request,
    res: Response,
    resource: (model: any) => object) => {
    const { page, limit }: {
        page: number
        limit: number
    } = req.body

    const currentPage = page || 1

    return res.json(listCollection(
        (await model.find().limit(limit).skip((currentPage - 1) * limit)).map(resource),
        currentPage,
        limit,
        await model.countDocuments()
    ))
}