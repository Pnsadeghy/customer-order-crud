import type OrderProductRequestInterface from "../requests/interfaces/order.product.request.interface"
import orderItemResource from "../resources/order.item.resource"
import orderRepository from "../repositories/order.repository"
import {paginateList} from "../../utils/pagiante.utils"
import orderResource from "../resources/order.resource"
import {Request, Response} from "express"

const orderController = {
    index: async (req: Request, res: Response) => {
        return await paginateList(orderRepository.query, req, res, orderItemResource)
    },
    store: async (req: Request, res: Response) => {
        const { customer, address, date, items }: {
            customer: string
            address: string
            date?: string
            items: OrderProductRequestInterface[]
        } = req.body

        const newOrder = await orderRepository.store(
            customer,
            address,
            date ? new Date(date!) : new Date(),
            items)

        return res.json(orderItemResource(newOrder))
    },
    show: async (req: Request, res: Response) => {
        const order = await orderRepository.findById(req.params.id!)
        if (order === null) return res.status(404)

        return res.json(orderResource(order))
    },
    update: async (req: Request, res: Response) => {
        const order = await orderRepository.findById(req.params.id!)
        if (order === null) return res.status(404)

        const { customer, address, items }: {
            customer: string
            address: string
            items: OrderProductRequestInterface[]
        } = req.body

        await orderRepository.update(order, customer, address, items)

        return res.json()
    },
    destroy: async (req: Request, res: Response) => {
        const order = await orderRepository.findById(req.params.id!)
        if (order === null) return res.status(404)

        await orderRepository.destroy(order)

        return res.status(204).json()
    }
}

export default orderController