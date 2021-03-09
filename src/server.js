import express from "express"
import path from "path"
import cloudinary from "cloudinary"
import jwt from "jsonwebtoken"
import ChatRoom from "./models/Chatroom"
import mongoose from "mongoose"

import connectDB from "./config/connection"

import usersRoute from "./routes/api/users"
import profilesRoute from "./routes/api/profiles"

import "regenerator-runtime/runtime"; // for the babel regenerator 
import { async } from "regenerator-runtime/runtime"

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()

const PORT = process.env.PORT || 4000

connectDB()

app.use(express.json({ extended: false }))
app.get("/", (req, res) => {
  res.send("welcome to divine mingle")
})
// define your routes here
app.use('/api/v1/user', usersRoute)
app.use('/api/v1/profile', profilesRoute)

if(process.env.NODE_ENV === 'production'){
    // set static files
    app.use(express.static('client/build'))

    
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'))
    })
}

const server = app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))

let count = 0

let io = require('socket.io')(server);

io.use((socket, next) => {
    const { token } = socket.handshake.query
    try {
      const decoded = jwt.verify(token, process.env.JWTSECRET)
      socket.userId = decoded.user.id
      next()
    } catch (error) { }
})

io.on('connection', (socket) => {
  console.log("user connected " + socket.userId)

  socket.emit('countUpdated', count)

  socket.emit('message', "welcome")
  socket.broadcast.emit('message', 'A new user has joined')

  socket.on("increment", () => {
    count++
    io.emit('countUpdated', count)
  })

  socket.on('sendLocation', ({ lat, long}) => {
    io.emit('messageLocation', `Location is ${lat} ${long}`)
  })

  socket.on('getUserRooms', async () => {
   let userChatRooms = await ChatRoom.find({
    $or: [{
      'createdBy.createdById':mongoose.Types.ObjectId(socket.userId) 
     }, {
      'createdWith.createdWithId': mongoose.Types.ObjectId(socket.userId)
    }]
  })

  socket.emit('chatRoomResults', userChatRooms)
  })

  socket.on('sendMessage', (message, callback) => {
    io.emit('messageText', message)
    callback("Delivered")
  })

  socket.on('disconnect', () => {
    io.emit('messageDisconnect', 'A user has left!')
  })

})
