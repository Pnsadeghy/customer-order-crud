import type OrderProductRequestInterface from "./interfaces/order.product.request.interface"
import ProductModel from "../models/product.model"
import { body } from 'express-validator'

const orderRequest = [
    body('customer').notEmpty(),
    body('address').notEmpty(),
    body('date').optional().isDate(),
    body('items.*.product').notEmpty().isUUID(),
    body('items.*.quantity').isNumeric(),
    body('items.*.price').isNumeric(),
    body('items').notEmpty().isArray().custom(async value => {
        const ids = value.map((i: OrderProductRequestInterface) => i.product)
        if (ids.length !== new Set(ids).size)
            throw new Error("Items have repeated items")
        const products = await ProductModel.find({ _id: ids })
        if (ids.length !== products.size())
            throw new Error("Unregistered products found")
    })
]

export default orderRequest