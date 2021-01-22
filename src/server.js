import express from "express"

import "../config/connection"

const app = express()
const PORT = process.env.PORT || 4000
import usersRoute from "./routes/api/users"

app.use(express.json({ extended: false }))

// define your routes here
app.use('/api/v1/user', usersRoute)

if(process.env.NODE_ENV === 'production'){
    // set static files
    app.use(express.static('client/build'))

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.use(express.static('client/build'))

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))