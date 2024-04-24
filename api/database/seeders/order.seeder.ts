import type OrderProductRequestInterface from "../../app/requests/interfaces/order.product.request.interface"
import ProductModel, {ProductDocument} from "../../app/models/product.model"
import {getOrderItems, getOrderTotalPrice} from "../../utils/order.utils"
import {randomIntFromInterval} from "../../utils/number.utils"
import OrderModel from "../../app/models/order.model"
import {faker} from "@faker-js/faker"
import shortid from "shortid"

const orderSeeder = async () => {
    if (await OrderModel.countDocuments() > 0) return
    const products = await ProductModel.find()
    try {
        for (let i = 0; i < 10; i++) {
            const items: OrderProductRequestInterface[] = []
            const itemsCount = randomIntFromInterval(1, 5)

            for (let j = 0; j < itemsCount; j++) {
                items.push({
                    product: products[j].id,
                    price: products[j].price,
                    quantity: randomIntFromInterval(1, 10)
                })
            }

            await OrderModel.create({
                code: shortid.generate(),
                customerName: faker.person.fullName(),
                address: faker.location.streetAddress(),
                orderDate: faker.date.recent(),
                totalPrice: getOrderTotalPrice(items),
                items: getOrderItems(items)
            });
        }
        console.log('10 order were created!');
    } catch (error) {
        console.error('Error', error);
    }
}

export default orderSeeder