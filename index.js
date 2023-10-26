import express from 'express'
import mustacheExpress from "mustache-express"
import path from 'path'
import { fileURLToPath } from 'url'
import homeRouter from './src/route/home.js'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/src/view')

app.get('/', homeRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000')
})