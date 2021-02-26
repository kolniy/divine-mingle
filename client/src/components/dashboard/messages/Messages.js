import React from "react"
import sampleImage from "../../../images/profile-test-image.jpg"

const Messages = () => {
    return <>
<div className="messages">
    <div className="messages__content-container">
        <div className="messages__header shadow">
            <div className="messages__header-avatar-container">
            <img className="img-fluid rounded-circle"
                    src={sampleImage}
                    alt="chat item icon display"
                />
            </div>
            <div className="messages__header-user-info">
                <p className="user-info-name">Jim Iyke</p>
                <p className="user-info-lastseen">Last Seen At 9:31PM</p>
            </div>
        </div>
        <div className="messages__body">
            <p className="chat__message">
                Hey GUys
            </p>
        </div>
        <div className="messages__footer shadow"></div>
    </div>
</div>
    </>
}

export default Messages