import React from "react"
import { 
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText
 } from "reactstrap"

const MatchDisplayItem = ({ cardImage, profileName }) => {
    return <>
    <Col className="mb-4" sm="3" xs="6">
        <div className="match-display-item">
        <Card className="shadow">
        <CardImg
          alt="..."
          src={cardImage}
          className="img-fluid"
          top
        ></CardImg>
        <CardBody>
          <CardTitle>{profileName}</CardTitle>
          <CardText>
            <i className="fa fa-map-marker mr-1"></i> 39km away from here
          </CardText>
        </CardBody>
      </Card>
      </div>
    </Col>
    </>
}

export default MatchDisplayItem