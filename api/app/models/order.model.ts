import mongoose, { Schema, Document } from 'mongoose'

export interface OrderDocument extends Document {
    code: string
    customerName: string
    address: string
    totalPrice: number
    orderDate: Date
    items: {
        product: string
        quantity: number
        pricePerUnit: number
    }[]
}

const orderSchema: Schema = new Schema({
    code: { type: String, required: true },
    customerName: { type: String, required: true },
    address: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    totalPrice: { type: Number, required: true },
    items: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product' },
        quantity: Number,
        pricePerUnit: Number
    }]
})

const OrderModel = mongoose.model<OrderDocument>('Order', orderSchema)

export default OrderModel