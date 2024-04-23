import {ProductDocument} from "../../models/product.model"

export default interface ProductRepositoryInterface {
    all: () => Promise<ProductDocument[]>
}