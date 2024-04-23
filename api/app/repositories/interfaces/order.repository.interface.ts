import type OrderProductRequestInterface from "../../requests/interfaces/order.product.request.interface"
import {type OrderDocument} from "../../models/order.model"

export default interface OrderRepositoryInterface {
    query: (filters: object = {}) => any,
    store: (customer: string, address: string, date: Date, items: OrderProductRequestInterface[]) => Promise<OrderDocument>
    findById: (id: string) => Promise<OrderDocument|null>
    update: (model: OrderDocument, customer: string, address: string, items: OrderProductRequestInterface[]) => Promise<void>
    destroy: (model: OrderDocument) => Promise<void>
}