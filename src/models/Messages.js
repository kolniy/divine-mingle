import mongoose from "mongoose"

const messagesSchema = new mongoose.Schema({
    chatroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "chatroom",
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    message: {
        type: String
    },
    recieved: {
        type: Boolean
    }
},
{
    timestamps: true
}
)

const Message = mongoose.model("messages", messagesSchema)

export default Message