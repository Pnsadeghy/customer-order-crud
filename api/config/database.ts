import mongoose from 'mongoose'

const connectToDatabase = () => {
    mongoose.connect(process.env.DB_CONNECTION!)
    const database = mongoose.connection

    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database Connected')
    })

    return database
}

export default connectToDatabase