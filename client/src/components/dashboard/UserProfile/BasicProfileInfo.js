import React from "react"
import {
    Container,
    Col,
    Row,
    Button
} from "reactstrap"
import Profile from "../../../images/profile.jpg"

const BasicProfileInfo = () => {
    return <>
         <Container>
           <div className="profile-info">
               <Row>
            <Col md="3">
                <div className="img-container">
                <img
                 src={Profile}
                 className="img-fluid rounded-circle" 
                 alt="dashboard profile"
                />
                </div>
            </Col>
                <Col md="9">
                    <div className="profile-details-container">
                        <h1 className="profile-name">Mary Amaka</h1>
                        <p className="profile-age-and-location">29
                            <span className="profile-location">Chicago illinois, United States</span>
                        </p>
                        <Button className="update-profile-button" color="warning">Update Info</Button>
                    </div>
                </Col>
            </Row>
           </div>
        </Container>
    </>
}

export default BasicProfileInfo