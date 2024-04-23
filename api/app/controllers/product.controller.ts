import productRepository from "../repositories/product.repository"
import productResource from "../resources/product.resource"
import { Request, Response } from 'express'

const productController = {
    index: async (req: Request, res: Response) => {
        return res.json(
            (await productRepository.all()).map(productResource)
        )
    }
}

export default productController