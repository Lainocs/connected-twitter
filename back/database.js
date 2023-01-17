import * as dotenv from 'dotenv'
import { createConnection } from 'mysql'

dotenv.config({
  path: './.env.local',
  override: true
})

const connection = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

export default connection