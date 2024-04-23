import {ProductDocument} from "../models/product.model"

const productResource = (model: ProductDocument) => ({
    id: model._id,
    name: model.name,
    price: model.price
})

export default productResource