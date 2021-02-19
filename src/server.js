import express from "express"
import path from "path"
import cloudinary from "cloudinary"

import connectDB from "./config/connection"

import usersRoute from "./routes/api/users"
import profilesRoute from "./routes/api/profiles"

import "regenerator-runtime/runtime"; // for the babel regenerator 


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const app = express()
const PORT = process.env.PORT || 4000

connectDB()

app.use(express.json({ extended: false }))

// define your routes here
app.use('/api/v1/user', usersRoute)
app.use('/api/v1/profile', profilesRoute)

if(process.env.NODE_ENV === 'production'){
    // set static files
    app.use(express.static('client/build'))

    
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))