import {paginateList} from "../../utils/pagiante.utils"
import orderResource from "../resources/order.resource"
import OrderModel from "../models/order.model"
import {Request, Response} from "express"

const orderController = {
    index: (req: Request, res: Response) => {
        return paginateList(OrderModel, req, res, orderResource)
    },
    store: (req: Request, res: Response) => {},
    show: (req: Request, res: Response) => {},
    update: (req: Request, res: Response) => {},
    destroy: (req: Request, res: Response) => {}
}

export default orderController