import React from "react"
import { 
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText
 } from "reactstrap"

const VisitorsDisplayItem = ({ cardImage, profileName }) => {
    return <>
    <Col className="mb-4" sm="3" xs="6">
        <div className="visitors-display-item">
        <Card className="shadow">
        <div className="card-image-container">
        <CardImg
          alt="..."
          src={cardImage}
          className="img-fluid"
          top
        ></CardImg>
        </div>
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

export default VisitorsDisplayItem