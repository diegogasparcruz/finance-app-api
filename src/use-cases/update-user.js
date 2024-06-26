import bcrypt from 'bcrypt'
import { EmailAlreadyInUseError } from '../errors/user.js'
import { PostgresGetUserByEmailRepository } from '../repositories/postgres/get-user-by-email.js'
import { PostgresUpdateUserRepository } from '../repositories/postgres/update-user.js'

export class UpdateUserUseCase {
  async execute(userId, updateUserParams) {
    if (updateUserParams.email) {
      const postgresGetUserByEmailRepository =
        new PostgresGetUserByEmailRepository()

      const userWithProvidedEmail =
        await postgresGetUserByEmailRepository.execute(updateUserParams.email)

      if (userWithProvidedEmail) {
        throw new EmailAlreadyInUseError(updateUserParams.email)
      }
    }

    const user = {
      ...updateUserParams,
    }

    if (updateUserParams.password) {
      const hashedPassword = await bcrypt.hash(updateUserParams.password, 10)

      user.password = hashedPassword
    }

    const postgresUpdateUserRepository = new PostgresUpdateUserRepository()
    const updatedUser = await postgresUpdateUserRepository.execute(userId, user)

    return updatedUser
  }
}
