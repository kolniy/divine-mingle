import React from "react"

import CommentItem from "./CommentItem"

const CommentContainer = () => {
    return <>
        <div className="comment-container">
            <CommentItem />
            <CommentItem />
            <CommentItem />
        </div>
    </>
}

export default CommentContainer