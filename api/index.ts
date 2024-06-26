import validatorMiddleware from "./app/middlewares/validator.middleware"
import express, { Request, Response , Application } from 'express'
import database from "./database"
import bodyParser from 'body-parser'
import i18n from "./localization"
import router from "./routes"
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
database()

const app: Application = express()
const port = process.env.PORT || 8000

app.get('/', async (req: Request, res: Response) => {
    res.send('Welcome to Customer CRUD')
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(validatorMiddleware)
app.use(bodyParser.json())
app.use(i18n.init)
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`)
})