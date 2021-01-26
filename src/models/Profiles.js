import mongoose from "mongoose"

const profileSchema = ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
    },
    ethnicity: {
        type: String
    },
    denomination: {
        type: String,
    },
    interests: {
        type: [String]
    },
    profilepic: {
        type: String
    },
    dateofbrith: {
        type: String
    },
    profilecompleted: {
        type: Boolean,
        default: false
    }
})


const Profile = mongoose.model('profile', profileSchema)

export default Profile