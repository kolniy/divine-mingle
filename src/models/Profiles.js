import mongoose from "mongoose"

const profileSchema = ({
    owner: {
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
    profilePic: {
        type: String
    },
    dateofbrith: {
        type: Date,
        default: Date.now
    },
    profilecompleted: {
        type: Boolean,
        default: false
    }
})


const Profile = mongoose.model('profile', profileSchema)

export default Profile