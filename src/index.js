import 'dotenv/config.js'
import express from 'express'

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
