import express from "express"

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json({ extended: false }))

console.log(process.env.SAMPLELOG)

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))