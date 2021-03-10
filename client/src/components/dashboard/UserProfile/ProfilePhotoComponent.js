import React from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import samplePhoto from "../../../images/profile-test-image.jpg"

const ProfilePhoto = ({
  profile: {
    userprofile
  }
}) => {
    return <>
        <div className="profile-photo">
        <Row>
          {
            userprofile !== null && <>
          {
          userprofile.photos.length < 1 ? 
         <Col className="mb-4" sm="3" xs="6">
        <p className="lead text-center">
        You Currently have no photo's, click the add photo button to add your photo
        </p>
        </Col> : <>
            {
            userprofile.photos.map((photo) => <Col key={photo._id} className="mb-4" sm="3" xs="6">
            <div className="profile-photo-img-container">
                <img
                alt="..."
                className="img-fluid"
                src={photo.url}
              />
            </div>
          </Col>)
            }
      </>
          }
            </>
          }
      <Col className="mb-4" sm="3" xs="6">
        <div className="profile-photo-img-container">
            <img
            alt="..."
            className="img-fluid"
            src={samplePhoto}
          />
        </div>
      </Col>
      
      <Col className="mb-4" sm="3" xs="6">
      <div className="profile-photo-img-container">
        <div className="plus-icon-add">
          <div className="add-photo-instructions-container">
          <div className="plus-icon text-center">
           <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
        <p className="plus-text text-center">ADD PHOTO</p>
          </div>
        </div>
      </div>
      </Col>
        </Row>
        </div>
    </>
} 

const mapStateToProps = (state) => ({
  profile: state.profile
})

export default connect(mapStateToProps)(ProfilePhoto)
