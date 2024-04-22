const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    address: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    items: [{
        productName: String,
        quantity: Number,
        pricePerUnit: Number
    }]
});

const OrderModel = mongoose.model('Order', orderSchema, "orders");

export default OrderModel