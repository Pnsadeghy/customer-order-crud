import {OrderDocument} from "../models/order.model"

const orderResource = (model: OrderDocument) => ({
    customer: model.customerName,
    address: model.address,
    date: model.orderDate,
    items: model.items.map((i: {
        productName: string
        quantity: number
        pricePerUnit: number
    }) => ({
        product: i.productName,
        quantity: i.quantity,
        price: i.pricePerUnit
    }))
})

export default orderResource