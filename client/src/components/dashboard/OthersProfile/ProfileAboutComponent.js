import React from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import Spinner from "../../layout/Spinner"

const ProfileAboutComponent = ({ 
    profile: {
        otherUserProfile,
        otherUserProfileLoading
    }
}) => {
    return <>
    {
     !otherUserProfileLoading && otherUserProfile !== null ? <>
        <div className="about-profile">
         <Row>
            <Col md="7">
                <div className="about-section">
                    <h4 className="sub-heading">About Me</h4>
                    <p className="paragraph">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
                <div className="about-section">
                    <h4 className="sub-heading">Denomination</h4>
                    <p className="paragraph">
                        {
                          otherUserProfile.denomination
                        }
                    </p>
                </div>
                <div className="about-section">
                    <h4 className="sub-heading">Marital Status</h4>
                    <p className="paragraph">
                       Single
                    </p>
                </div>
                <div className="about-section">
                    <h4 className="sub-heading">Hobbies</h4>
                    <p className="paragraph">Cycling</p>
                    <p className="paragraph">Boxing</p>
                    <p className="paragraph">Reading</p>
                </div>
            </Col>
            <Col md="3 ml-4">
                <div className="about-section">
                    <h4 className="sub-heading bordered">My Details</h4>
                    <h4 className="sub-heading bordered">Ethnicity <span className="profile-spec ml-2">{otherUserProfile.ethnicity}</span></h4>
                    <h4 className="sub-heading bordered">Eye Color <span className="profile-spec ml-2">Blue</span></h4>
                    <h4 className="sub-heading bordered">Height   <span className="profile-spec ml-2">102CM</span></h4>
                    <h4 className="sub-heading bordered">Body Type <span className="profile-spec ml-2">Slender</span></h4>
                </div>
            </Col>
        </Row>
        </div>
        </> : <Spinner />
    }
     
    </>
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps)(ProfileAboutComponent)