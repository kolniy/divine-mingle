import React, { useState } from "react"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateNavbar from "../../layout/PrivateNavbar"
import Sidebar from "./Sidebar"
import Messages from "./Messages"

const ChatWindow = () => {

    const [ chatRoomId, setChatRoomId ] = useState(null)

    const updateChatRoomId = (value) => {
        setChatRoomId(value)
    }

    return <>
        <section className="messages-section">
            <PrivateNavbar />
        <div className="chat-window-container">
            <div className="chat-window shadow">
               <Sidebar updateRoomId={updateChatRoomId} />
               <Messages chatId={chatRoomId}/>
                  {/* <Router>
                  <Sidebar updateRoomId={updateChatRoomId} /> 
                      <Switch>
                        <Route to="/rooms/:roomId">
                            <Messages chatId={chatRoomId}/>
                        </Route>
                        <Route to="/">
                            <Messages  />
                        </Route>
                      </Switch>
                  </Router> */}
            </div>
        </div>
        </section>
    </>
}

export default ChatWindow