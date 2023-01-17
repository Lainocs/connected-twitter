import express from 'express'
import router from './api/router.js'
import bodyParser from 'body-parser'
import database from './database.js'
import cors from 'cors'
import { Server } from 'socket.io'
import * as dotenv from 'dotenv'
import { createServer } from 'http'

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

const httpServer = createServer(app)

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
  allowEIO3: true
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

httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`)
})