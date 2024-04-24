import productSeeder from "./seeders/product.seeder"
import orderSeeder from "./seeders/order.seeder"

const seeder = async () => {
    await productSeeder()
    await orderSeeder()
}

export default seeder