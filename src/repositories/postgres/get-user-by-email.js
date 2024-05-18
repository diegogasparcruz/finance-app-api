import { PostgresHelper } from '../../db/postgres/helper.js'

export class PostgresGetUserByEmailRepository {
  async execute(email) {
    const user = await PostgresHelper.query(
      'SELECT * FROM users WHERE email = $1',
      [email],
    )

    return {
      id: user[0].id,
      first_name: user[0].first_name,
      last_name: user[0].last_name,
      email: user[0].email,
    }
  }
}
