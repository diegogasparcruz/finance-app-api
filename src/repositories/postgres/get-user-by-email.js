import { PostgresHelper } from '../../db/postgres/helper.js'

export class PostgresGetUserByEmailRepository {
  async execute(email) {
    const user = await PostgresHelper.query(
      'SELECT id,first_name,last_name,email FROM users WHERE email = $1',
      [email],
    )

    return user[0]
  }
}
