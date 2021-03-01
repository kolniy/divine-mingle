import React, { useEffect, useState } from "react"
import db from "../../../firebase"
import sampleImage from "../../../images/profile-test-image.jpg"
import dummyAvatar from "../../../images/dummy-avatar.png"
import firebase from "firebase"

const Messages = ({ chatId }) => {

    const [ input, updateInput ] = useState("")
    const [ roomName, setRoomName ] = useState("")
    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        if(chatId){
            db.collection('rooms').doc(chatId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

            db.collection("rooms")
            .doc(chatId)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot) => setMessages(
                snapshot.docs.map((doc) => doc.data())
            ))
        }
        console.log(chatId)
    }, [chatId])

    const sendMessage = (e) => {
        e.preventDefault()
        db.collection("rooms").doc(chatId).collection("messages").add({
            message:input,
            name:"some random user",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        updateInput("")
    }

return <>
    <div className="messages">
    <div className="messages__content-container">
        <div className="messages__header shadow">
            <div className="messages__header-avatar-container">
            <img className="img-fluid rounded-circle"
                    src={ chatId === null ? dummyAvatar : sampleImage}
                    alt="chat item icon display"
                />
            </div>
            <div className="messages__header-user-info">
                <p className="user-info-name">{chatId === null ? "User Name" : roomName}</p>
                <p className="user-info-lastseen">Last Seen At 9:31PM</p>
            </div>
        </div>
        <div className="messages__body">
            {
                messages.map((message) => (
                <p className={`chat__message ${true && 'chat__reciever'}`}>
                    {
                        message.message
                    }
                <span className="chat__timestamp">{
                    new Date(message.timestamp?.toDate()).toUTCString()
                }</span>
                </p>
             ))
            }
        </div>
        <div className="messages__footer shadow">
        <i class="fa fa-smile-o" aria-hidden="true"></i>
        <i class="fa fa-paperclip"></i>
        <form>
            <input
            value={input}
            onChange={e => updateInput(e.target.value)}
             type="text" placeholder="Type a message"></input>
            <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <i class="fa fa-microphone"></i>
        </div>
    </div>
</div>
    </>
}

export default Messages