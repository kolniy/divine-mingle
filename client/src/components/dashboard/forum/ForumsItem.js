import React from "react"
import { Row, Col } from "reactstrap"

const ForumsItem = ({ forumImg, forumHeader ,forumAuthor }) => {
    return <>
       <div className="forum-item shadow">
            <Row>
                <Col md="3" sm="3">
                   <div className="image-container">
                    <img 
                    src={forumImg} 
                    className="img-fluid"
                    alt="forum display"
                    />
                   </div>
                </Col>
                <Col md="9" sm="9">
                    <div className="forum-info">
                        <h4 className="forum-info-header">{forumHeader}</h4>
                        <p className="forum-info-paragraph">Lorem ipsum
                         dolor sit amet, consectetur adipiscing elit, sed do 
                         eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                           dolor in reprehenderit in voluptate velit esse.
                           </p>
                          <div className="forum-details mb-2">
                              <span className="forum-timestamp">
                                   <i className="fa fa-calendar mr-2"></i>
                                   16:20 GMT, 01/21/2021
                              </span>
                              <span className="forum-article-author">
                                    By {forumAuthor}
                              </span>
                          </div>
                    </div>
                </Col>
            </Row>
       </div>
    </>
}

export default ForumsItem