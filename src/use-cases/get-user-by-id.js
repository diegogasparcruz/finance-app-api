import { PostgresGetUserById } from '../repositories/postgres/get-user-by-id'

export class GetUserByIdUseCase {
  async execute(userId) {
    const getUserByIdRepository = new PostgresGetUserById()

    const user = await getUserByIdRepository(userId)

    return user
  }
}
