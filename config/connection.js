import mongoose from "mongoose"

mongoose.connect(process.env.SINGLE_MINGLE_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(() => console.log('Database connected succesfully'))
.catch((err) => {
    console.log(err)
})