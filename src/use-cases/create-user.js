import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import { PostgresCreateUserRepository } from '../repositories/postgres/create-user'

export class CreateUserUseCase {
  async execute(createUserParams) {
    // TODO: verificar se o e-mail ja esta em uso

    const userId = uuidv4()

    const hashedPassword = await bcrypt.hash(createUserParams.passwprd, 10)

    const user = {
      ...createUserParams,
      ID: userId,
      password: hashedPassword,
    }

    const postgresCreateUserRepository = new PostgresCreateUserRepository()

    const createdUser = await postgresCreateUserRepository.execute(user)

    return createdUser
  }
}
