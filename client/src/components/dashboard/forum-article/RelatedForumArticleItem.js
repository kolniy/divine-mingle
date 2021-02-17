import React from "react"
import { Row, Col } from "reactstrap"
import sampleImage from "../../../images/profile-test-image.jpg"

const RelatedForumArticleItem = () => {
    return <>
    <div className="related-forum-article-item shadow mb-4">
        <Row>
            <Col className="mr-0" md="4" sm="4">
                <div className="related-forum-article-image-container">
                    <img src={sampleImage}
                     className="img-fluid"
                    alt="next article illustrator"
                     />
                </div>
            </Col>
            <Col className="ml-0" md="8" sm="8">
            <div className="related-article-details-container">
                <p className="related-forum-article-title">
                    Pastor Godill's couple prayer session
                </p>
            </div>
            <div className="related-article-details-info">
                <span className="timestamp">
                    <i className="fa fa-calendar"></i>{" "}
                    16:20 GMT, 01/21/2021
                </span>
                <span className="author ml-4">
                    By Kelly Unyon
                </span>
            </div>
            </Col>
        </Row>
    </div>
    </>
}

export default RelatedForumArticleItem