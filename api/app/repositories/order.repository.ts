import type OrderProductRequestInterface from "../requests/interfaces/order.product.request.interface"
import type OrderRepositoryInterface from "./interfaces/order.repository.interface"
import {getOrderItems, getOrderTotalPrice} from "../../utils/order.utils"
import OrderModel, {OrderDocument} from "../models/order.model"
import shortid from "shortid"

const orderRepository: OrderRepositoryInterface = {
    query: (filters: object = {}) => OrderModel.find(filters).sort({orderDate: "desc"}),
    store: async (customer: string, address: string, date: Date, items: OrderProductRequestInterface[]) =>
        await OrderModel.create({
            code: shortid.generate(),
            orderDate: date,
            customerName: customer,
            address,
            totalPrice: getOrderTotalPrice(items),
            items: getOrderItems(items)
        }),
    findById: async (id: string) => await OrderModel.findById(id),
    update: async (model: OrderDocument, customer: string, address: string, items: OrderProductRequestInterface[]) => {
        model.customerName = customer
        model.address = address
        model.totalPrice = getOrderTotalPrice(items)
        model.items = getOrderItems(items)
        await model.save()
    },
    destroy: async (model: OrderDocument) => {
        await model.deleteOne()
    }
}

export default orderRepository