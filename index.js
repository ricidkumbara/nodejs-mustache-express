import express from 'express'
import mustacheExpress from "mustache-express"
import path from 'path'
import { fileURLToPath } from 'url'
import homeRouter from './src/routes/home.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/src/views')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', homeRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})