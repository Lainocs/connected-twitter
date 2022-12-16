import * as dotenv from 'dotenv'
import { createConnection } from 'mysql'

dotenv.config()

const connection = createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'twitterjpo'
})

export default connection