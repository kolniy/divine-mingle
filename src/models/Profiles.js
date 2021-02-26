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
        type: [{
            id: Number,
            interestName: String
        }]
    },
    userLocation: {
        latitude: {
            type: String
        },
        longitude: {
            type: String
        }
    },
    profilepic: {
        type: String
    },
    dateofbirth: {
        type: String
    },
    about: {
        type: String
    },
    maritalstatus: {
        type: String
    },
    eyecolor: {
        type: String
    },
    height: {
        type: String
    },
    bodytype: {
        type: String
    },
    photos: [{
        url: {
            type: String
        }
    }],
    questions: [{
        question: {
            type: String
        },
        answer: {
            type: String
        },
        answered: {
            type: Boolean
        }
    }],
    profilecompleted: {
        type: Boolean,
        default: false
    }
})


const Profile = mongoose.model('profile', profileSchema)

export default Profile