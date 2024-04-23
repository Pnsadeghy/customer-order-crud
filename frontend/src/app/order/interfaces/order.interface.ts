import type OrderProductInterface from "./order.product.interface"

export default interface OrderInterface {
    id: string
    code: string
    customer: string
    address: string
    totalPrice: number
    date: string
    items: OrderProductInterface[]
}