import { PostgresHelper } from '../../db/postgres/helper.js'

export class PostgresCreateUserRepository {
  async execute(createUserParams) {
    await PostgresHelper.query(
      'INSERT INTO users (ID, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5)',
      [
        createUserParams.id,
        createUserParams.first_name,
        createUserParams.last_name,
        createUserParams.email,
        createUserParams.password,
      ],
    )

    const createdUser = await PostgresHelper.query(
      'SELECT * FROM users WHERE id = $1',
      [createUserParams.id],
    )

    return {
      id: createdUser[0].id,
      first_name: createdUser[0].first_name,
      last_name: createdUser[0].last_name,
      email: createdUser[0].email,
    }
  }
}
