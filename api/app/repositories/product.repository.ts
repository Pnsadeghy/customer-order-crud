import type ProductRepositoryInterface from "./interfaces/product.repository.interface";
import ProductModel from "../models/product.model";

const productRepository: ProductRepositoryInterface = {
    all: async () => await ProductModel.find()
}

export default productRepository