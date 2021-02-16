import React from "react"
import ForumsItem from "./ForumsItem"
import maldivesImage from "../../../images/maldives.jpg"
import manInSuit from "../../../images/man-in-black-suit-standing.jpg"
import workImage from "../../../images/working-atmosphere.jpg"


const ForumsContainer = () => {
    return <>
        <div className="forums-container">
            <ForumsItem forumImg={manInSuit}
             forumHeader="Pastor Goodwill's couple prayer session"
              forumAuthor="Pastor Goodwill's" />
            <ForumsItem forumImg={maldivesImage} 
            forumHeader="Places you can go for a romantic vacation"
             forumAuthor="Kelly Unyon" />
            <ForumsItem forumImg={workImage} 
            forumHeader="Balancing work and relationship" 
            forumAuthor="Kelly Unyon" />
        </div>
    </>
}

export default ForumsContainer