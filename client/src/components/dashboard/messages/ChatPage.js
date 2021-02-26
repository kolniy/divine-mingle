import React from "react"
import PrivateNavbar from "../../layout/PrivateNavbar"
import Sidebar from "./Sidebar"
import Messages from "./Messages"

const ChatWindow = () => {
    return <>
        <section className="messages-section">
            <PrivateNavbar />
        <div className="chat-window-container">
            <div className="chat-window shadow">
                    <Sidebar />
                   <Messages />
            </div>
        </div>
        </section>
    </>
}

export default ChatWindow