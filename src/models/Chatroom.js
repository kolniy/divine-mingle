import mongoose from "mongoose"

const chatRoomSchema = new mongoose.Schema({
    name: {
        type: String
    },
    createdBy: {
        createdById: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        name: {
            type: String
        },
        profilepic: {
            type: String
        },
        lastseen: {
            type: Date,
            default: Date.now
        }
    },
    createdWith: {
        createdWithId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        name: {
            type: String
        },
        profilepic: {
            type: String
        },
        lastseen:{
            type: Date,
            default: Date.now
        }
    },
    recentUpdateTimestamp: {
        type: Date
    }
},
{
    timestamps: true
}
)

const ChatRoom = mongoose.model("chatroom", chatRoomSchema)

export default ChatRoom
