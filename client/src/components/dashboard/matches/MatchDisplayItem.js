import React from "react"
import { Link } from "react-router-dom"
import StarRatings from "react-star-ratings"
import { 
    Col,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText
 } from "reactstrap"

const MatchDisplayItem = ({ cardImage, profileName, distanceApart, strengthCount, userId }) => {
    return <>
    <Col className="mb-4" sm="3" xs="6">
        <div className="match-display-item">
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
          <CardTitle>
            <Link to={`/dashboard/profile/user/${userId}`}>{profileName}</Link>
          </CardTitle>
          <CardText>
            <i className="fa fa-map-marker mr-1"></i> {distanceApart}{" "}{" "}km away from here
          </CardText>
        </CardBody>
        <div className="matching-strength">
          <span className="strength-test">
            matching strength
          </span>
        <StarRatings
				 isSelectable={false}
         rating={strengthCount}
         starDimension='15px'
         starRatedColor="orangered"
         numberOfStars={5}
         starSpacing='1px'
         name='rating'
        />
        </div>
      </Card>
      </div>
    </Col>
    </>
}

export default MatchDisplayItem