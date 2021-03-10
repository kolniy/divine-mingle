import React from "react"
import { connect } from "react-redux"
import { Row, Col } from "reactstrap"
import Spinner from "../../layout/Spinner"

const ProfileAboutComponent = ({
    profile: {
        userprofile,
        profileLoading
    }
}) => {
    return <>
        {
            !profileLoading && userprofile !== null ? <>
        <div className="about-profile">
         <Row>
            <Col md="7">
                <div className="about-section">
                    <h4 className="sub-heading">About Me</h4>
                {
                  userprofile.about ? <p className="paragraph">
                    {userprofile.about}
                  </p> : <p className="paragraph">
                    Please Update Your Profile, to Add About Me!
                    </p>
                }
                </div>
                <div className="about-section">
                    <h4 className="sub-heading">Denomination</h4>
                    <p className="paragraph">
                        {
                            userprofile.denomination
                        }
                    </p>
                </div>
                <div className="about-section">
                    <h4 className="sub-heading">Marital Status</h4>
                    
                      {
                          userprofile.maritalstatus ? <p className="paragraph">{userprofile.maritalstatus}</p> : <p className="paragraph">marital status not specified, kindly update your profile</p>
                      }
                </div>
                <div className="about-section">
                    <h4 className="sub-heading">Interests</h4>
                    {
                        userprofile.interests.map((interest) => <p key={interest._id} className="paragraph">{interest.interestName}</p>)
                    }
                </div>
            </Col>
            <Col md="3 ml-4">
                <div className="about-section">
                    <h4 className="sub-heading bordered">My Details</h4>
                    <h4 className="sub-heading bordered">Ethnicity <span className="profile-spec ml-2">{userprofile.ethnicity}</span></h4>
                    <h4 className="sub-heading bordered">Eye Color <span className="profile-spec ml-2">{
                        userprofile.eyecolor ? userprofile.eyecolor : "Not Specified"
                    }</span></h4>
                    <h4 className="sub-heading bordered">Height   <span className="profile-spec ml-2">{
                        userprofile.height ? userprofile.height : "Not Specified"
                    }</span></h4>
                    <h4 className="sub-heading bordered">Body Type <span className="profile-spec ml-2">{
                        userprofile.bodytype ? userprofile.bodytype : "Not Specified"
                    }</span></h4>
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