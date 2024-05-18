import { PostgresHelper } from '../../db/postgres/helper.js'

export class PostgresGetUserByIdRepository {
  async execute(userId) {
    const user = await PostgresHelper.query(
      'SELECT * FROM users WHERE id = $1',
      [userId],
    )

    return {
      id: user[0].id,
      first_name: user[0].first_name,
      last_name: user[0].last_name,
      email: user[0].email,
    }
  }
}
