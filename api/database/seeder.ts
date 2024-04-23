import productSeeder from "./seeders/product.seeder";

const seeder = async () => {
    await productSeeder()
}

export default seeder