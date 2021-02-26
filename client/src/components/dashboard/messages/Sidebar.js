import React from "react"
import SidebarChatItem from "./SidebarChatItem"

const Sidebar = () => {
    return <>
        <div className="sidebar">
            <div className="sidebar__header">
                <h4 className="sidebar__header-text">Messages</h4>
            </div>
            <div className="sidebar__chats">
            <div className="sidebar__chats-itemsContainer">
                <SidebarChatItem addNewChat />
                <SidebarChatItem />
                <SidebarChatItem />
                <SidebarChatItem />
                <SidebarChatItem />
                <SidebarChatItem /> 
                </div>
            </div>
        </div>
    </>
}

export default Sidebar