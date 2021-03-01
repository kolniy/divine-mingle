import React, { useState, useEffect } from "react"
import SidebarChatItem from "./SidebarChatItem"
import db from "../../../firebase"

const Sidebar = ({ updateRoomId }) => {

    const [ rooms, setRooms ] = useState([])
    
    useEffect(() => {
       const unsubscribe =  db.collection('rooms').onSnapshot(snapshot => {
        setRooms(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })
        ))
    })

        return () => {
            unsubscribe()
        }
    }, [])

    return <>
        <div className="sidebar">
            <div className="sidebar__header">
                <h4 className="sidebar__header-text">Messages</h4>
            </div>
            <div className="sidebar__chats">
            <div className="sidebar__chats-itemsContainer">
                <SidebarChatItem addNewChat />
                {
                    rooms.map((room) => (
                        <SidebarChatItem
                            key={room.id}
                            id={room.id}
                            name={room.data.name}
                            updateRoom={updateRoomId}
                        />
                    ))
                }
                </div>
            </div>
        </div>
    </>
}

export default Sidebar