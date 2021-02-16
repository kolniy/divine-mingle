import React from "react"
import { Input, Button, Row, Col } from "reactstrap"
import commentersImg from "../../../images/profile-test-image.jpg"

const CommentBox = () => {
    return <>
        <div className="comment-box">
            <p className="comment-count">15 comments</p>
            <div className="commenters-profilepic-and-input">
                <Row>
                    <Col className="pr-0 mr-0 mb-1" sm="3">
                    <div className="commenters-image-box">
                            <img
                            src={commentersImg}
                            alt="commenters illustrator" 
                            className="img-fluid"
                            />
                        </div>
                    </Col>
                    <Col className="pl-0 ml-0" sm="9">
                    <Input
                        className="comment-input-style"
                        placeholder="Leave a comment..."
                        rows="4" type="textarea"></Input>
                    </Col>
                </Row>
            </div>
            <Button className="btn-share" color="warning" type="submit">Share</Button>
    </div>
    </>
}

export default CommentBox
