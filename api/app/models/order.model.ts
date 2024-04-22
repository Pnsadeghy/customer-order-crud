import mongoose, { Schema, Document } from 'mongoose'

export interface OrderDocument extends Document {
    customerName: string
    address: string
    orderDate: string
    items: {
        productName: string
        quantity: number
        pricePerUnit: number
    }[]
}

const orderSchema: Schema = new Schema({
    customerName: { type: String, required: true },
    address: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    items: [{
        productName: String,
        quantity: Number,
        pricePerUnit: Number
    }]
})

const OrderModel = mongoose.model<OrderDocument>('Order', orderSchema)

export default OrderModel