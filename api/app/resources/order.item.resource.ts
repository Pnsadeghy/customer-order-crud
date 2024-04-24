import {type OrderDocument} from "../models/order.model"

const orderResource = (model: OrderDocument) => ({
    id: model._id,
    code: model.code,
    customer: model.customerName,
    totalPrice: model.totalPrice,
    date: model.orderDate
})

export default orderResource