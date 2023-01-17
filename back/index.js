import express from 'express'
import router from './api/router.js'
import bodyParser from 'body-parser'
import database from './database.js'
import cors from 'cors'
import { Server } from 'socket.io'
import * as dotenv from 'dotenv'

dotenv.config({
  path: './.env.local',
  override: true
})

const app = express()
const port = process.env.PORT

database.connect()

app.use(cors())
app.use(bodyParser.json())
app.use('/', router)

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const io = new Server(server, {
  cors: {
    origin: '*',
  }
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  socket.on('tweet', (tweet) => {
    io.emit('tweet', tweet)
  })
})