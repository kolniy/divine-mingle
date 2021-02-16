import React from "react"
import { Row, Col } from "reactstrap"
import sampleImage from "../../../images/profile.jpg"

const CommentItem = () => {
    return <>
        <div className="comment-item mb-5">
          <Row>
              <Col sm="3">
                <div className="comment-item__image">
                    <img src={sampleImage} className="img-fluid" alt="commenters illustrator" />
                </div>
              </Col>
              <Col sm="9">
              <div className="comment-item__comment-and-details">
                    <div className="comment-item__author-and-timestamp">
                        <span className="comment-author">Didier Le Cinque</span> 
                        <span className="comment-dot ml-2 mr-2">
                        </span>
                         <span className="comment-timestamp">3 minutes ago</span>
                    </div>
                    <p className="comment-text">
                    orem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in convallis odio. Vestibulum varius facilisis odio. Donec et nibh vel neque vestibulum imperdiet quis sed metus. Praesent lacinia in enim a mollis. Duis finibus, sapien ac volutpat sodales, massa massa.
                    </p>
                <div className="comment-item__actions">
                <span className="comment-item__action-like mr-3">
                        3 <i className="fa fa-heart"></i>
                    </span>
                    <span className="comment-item__action-share mr-4">
                        3 <i className="fa fa-arrow-left"></i>
                    </span>
                    <span className="comment-dot mr-2">
                    </span>
                    <span className="comment-item__replies">View replies</span>
                    <span className="comment-item__more-action">
                        <i className="fa fa-ellipsis-v"></i>
                    </span>
                 </div>
              </div>
              </Col>
          </Row>
        </div>
    </>
}

export default CommentItem