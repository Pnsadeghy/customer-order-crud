import mongoose, { Schema, Document } from 'mongoose'

export interface ProductDocument extends Document {
    name: string;
    price: number;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
})

const ProductModel = mongoose.model<ProductDocument>('Product', productSchema)

export default ProductModel