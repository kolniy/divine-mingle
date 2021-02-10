import React from "react"
import ForumsItem from "./ForumsItem"
import maldivesImage from "../../../images/maldives.jpg"
import manInSuit from "../../../images/man-in-black-suit-standing.jpg"
import workImage from "../../../images/working-atmosphere.jpg"


const ForumsContainer = () => {
    return <>
        <div className="forums-container">
            <ForumsItem forumImg={manInSuit} />
            <ForumsItem forumImg={maldivesImage} />
            <ForumsItem forumImg={workImage} />
        </div>
    </>
}

export default ForumsContainer