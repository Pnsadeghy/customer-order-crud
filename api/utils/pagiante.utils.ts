import paginateCollection from "../app/resources/paginate.collection"
import { Request, Response } from 'express'
import {Model} from "mongoose"

export const paginateList = async (
    queryBuilder: () => any,
    req: Request,
    res: Response,
    resource: (model: any) => object,
    sort: object|null = null) => {
    const { page, limit }: {
        page?: number
        limit?: number
    } = req.query

    const currentPage = page || 1
    const perPage = limit || 10

    return res.json(paginateCollection(
        (await queryBuilder().limit(perPage).skip((currentPage - 1) * perPage)).map(resource),
        currentPage,
        perPage,
        await queryBuilder().countDocuments()
    ))
}