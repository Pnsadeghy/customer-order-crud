import type OrderProductRequestInterface from "../app/requests/interfaces/order.product.request.interface"

export const getOrderTotalPrice = (items: OrderProductRequestInterface[]) =>
    items.reduce((sum: number, item: OrderProductRequestInterface) => sum + (item.price * item.quantity), 0)

export const getOrderItems = (items: OrderProductRequestInterface[]) =>
    items.map((i: OrderProductRequestInterface) => ({
        product: i.product,
        quantity: i.quantity,
        pricePerUnit: i.price
    }))