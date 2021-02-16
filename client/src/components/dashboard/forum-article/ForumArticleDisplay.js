import React from "react"
import { Container, Row, Col } from "reactstrap"
import PrivateNavbar from "../../layout/PrivateNavbar"
import articleDisplayImage from "../../../images/maldives.jpg"
import AddCommentBox from "./AddCommentBox"
import CommentContainer from "./CommentContainer"

const ForumArticleDisplay = () => {
    return <>
    <section className="forum-article-display">
        <PrivateNavbar />
        <br/><br/>
        <Container fluid>
            <Row>
                <Col className="d-none d-md-flex" md="3">

                </Col>
                <Col md="6">
                   <div className="article-and-comments-container">
                   <h1 className="article-display-name">
                        Places you can go for a romantic Vacation
                    </h1>
                    <div className="article-display-image">
                        <img src={articleDisplayImage}
                         className="img-fluid"
                        alt="article display illustrator"
                        />
                    </div>
                    <div className="article-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in convallis odio. 
                        Vestibulum varius facilisis odio.
                        Donec et nibh vel neque vestibulum imperdiet quis sed metus. Praesent lacinia in enim a mollis. Duis finibus, sapien ac 
                        volutpat sodales, massa massa consectetur ipsum, 
                        vel tincidunt neque tellus quis nisl. Sed varius 
                        lectus eu nibh vestibulum convallis. Mauris finibus elementum pulvinar. Donec faucibus eu risus id commodo. Duis dictum
                         ipsum nec mi ornare consequat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                          Pellentesque imperdiet molestie risus, vel facilisis sapien placerat sit amet. Praesent consequat felis purus. Maecenas iaculis et ante non ultrices. Nullam lobortis arcu pulvinar, posuere tortor id, venenatis quam.</p>
                          <br/>
                          <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in convallis odio. 
                        Vestibulum varius facilisis odio.
                        Donec et nibh vel neque vestibulum imperdiet quis sed metus. Praesent lacinia in enim a mollis. Duis finibus, sapien ac 
                        volutpat sodales, massa massa consectetur ipsum, 
                        vel tincidunt neque tellus quis nisl. Sed varius 
                        lectus eu nibh vestibulum convallis. Mauris finibus elementum pulvinar.
                          </p>
                    </div>
                    <AddCommentBox />
                    <CommentContainer/>
                </div>
                </Col>
                <Col md="3">
              
                </Col>
            </Row>
        </Container>
    </section>
    </>
}

export default ForumArticleDisplay