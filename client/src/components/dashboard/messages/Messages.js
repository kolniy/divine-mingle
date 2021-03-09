import React, { useEffect, useState } from "react"
import dummyAvatar from "../../../images/dummy-avatar.png"

const Messages = ({ chatRoomData }) => {

    const [ input, updateInput ] = useState("")
    // const [ messages, setMessages ] = useState([])

    useEffect(() => {
    //     if(chatId){
    //         db.collection('rooms').doc(chatId).onSnapshot(snapshot => (
    //             setRoomName(snapshot.data().name)
    //         ))

    //         db.collection("rooms")
    //         .doc(chatId)
    //         .collection("messages")
    //         .orderBy("timestamp", "asc")
    //         .onSnapshot((snapshot) => setMessages(
    //             snapshot.docs.map((doc) => doc.data())
    //         ))
    //     }
    //     console.log(chatId)
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        if(chatRoomData === null){
            return alert("Chat Recipient Not Selected, Select A User to Start Chatting")
        }
        if(input.length < 1){
            return alert("Text cannot be empty")
        }
        updateInput("")
    }

return <>
    <div className="messages">
    <div className="messages__content-container">
        <div className="messages__header shadow">
            <div className="messages__header-avatar-container">
            <img className="img-fluid rounded-circle"
                    src={ chatRoomData === null ? dummyAvatar : chatRoomData.profilepic }
                    alt="chat item icon display"
                />
            </div>
            <div className="messages__header-user-info">
                <p className="user-info-name">{ chatRoomData === null ? "User Name" : chatRoomData.name}</p>
                <p className="user-info-lastseen">Last Seen At {" "} unknown
                {/* {
                   messages[messages.length - 1] !== undefined ? (new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()) : "unknown"
                } */}
                </p>
            </div>
        </div>
        <div className="messages__body">
            {
            //     messages.map((message) => (
            //     <p className={`chat__message ${true && 'chat__reciever'}`}>
            //         {
            //             message.message
            //         }
            //     <span className="chat__timestamp">{
            //         new Date(message.timestamp?.toDate()).toUTCString()
            //     }</span>
            //     </p>
            //  ))
            <p className="chat__message">Welcome here</p>
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