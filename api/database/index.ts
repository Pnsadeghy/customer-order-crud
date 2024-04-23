import mongoose from 'mongoose'
import seeder from "./seeder"

const connectToDatabase = () => {
    mongoose.connect(process.env.DB_CONNECTION!)
    const database = mongoose.connection

    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', async () => {
        await seeder()
        console.log('Database Connected')
    })

    return database
}

export default connectToDatabase