import ProductModel from "../../app/models/product.model"
import { faker } from '@faker-js/faker'

const productSeeder = async () => {
    if (await ProductModel.countDocuments() > 0) return
    try {
        for (let i = 0; i < 10; i++) {
            await ProductModel.create({
                name: faker.vehicle.vehicle(),
                price: faker.finance.amount({ min: 5, max: 10 })
            });
        }
        console.log('10 product were created!');
    } catch (error) {
        console.error('Error', error);
    }
}

export default productSeeder