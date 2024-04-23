import {type OrderDocument} from "../models/order.model"

const orderResource = (model: OrderDocument) => ({
    id: model._id,
    code: model.code,
    customer: model.customerName,
    address: model.address,
    totalPrice: model.totalPrice,
    date: model.orderDate,
    items: model.items.map((i: {
        product: string
        quantity: number
        pricePerUnit: number
    }) => ({
        product: i.product,
        quantity: i.quantity,
        price: i.pricePerUnit
    }))
})

export default orderResource