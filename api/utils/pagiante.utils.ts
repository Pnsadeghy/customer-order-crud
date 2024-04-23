import paginateCollection from "../app/resources/paginate.collection"
import { Request, Response } from 'express'
import {Model} from "mongoose"

export const paginateList = async (
    queryBuilder: () => any,
    req: Request,
    res: Response,
    resource: (model: any) => object) => {
    const { page, limit }: {
        page: number
        limit: number
    } = req.body

    const currentPage = page || 1

    return res.json(paginateCollection(
        (await queryBuilder().limit(limit).skip((currentPage - 1) * limit)).map(resource),
        currentPage,
        limit,
        await queryBuilder().countDocuments()
    ))
}