import 'dotenv/config.js'
import express from 'express'
import { CreateUserController } from './controllers/create-user.js'
import { GetUserByIdController } from './controllers/get-user-by-id.js'

const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.post('/api/users', async (request, response) => {
  const createUserController = new CreateUserController()

  const { statusCode, body } = await createUserController.execute(request)

  response.status(statusCode).json(body)
})

app.get('/api/users/:userId', async (request, response) => {
  const getUserByIdController = new GetUserByIdController()

  const { statusCode, body } = await getUserByIdController.execute(request)

  response.status(statusCode).json(body)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
