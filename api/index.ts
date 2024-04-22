import express, { Express, Request, Response , Application } from 'express'
import dotenv from 'dotenv'
import database from "./utils/database"

dotenv.config()
database()

const app: Application = express()
const port = process.env.PORT || 8000

app.get('/', async (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server here')
})

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`)
})