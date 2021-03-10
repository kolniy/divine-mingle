import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col, FormGroup, Input } from "reactstrap"
import Spinner from "../../layout/Spinner"

const UpdateBasicProfile = ({ profile:
     { userprofile, profileLoading }
     }) => {
    return <>
        <Container>
            <p className="text-center lead updateProfile_call-to-action">
               Update Your Profile Details
            </p>
            {
                !profileLoading && userprofile !== null ?
                 <>
        <div className="update-basic-info">
            <Row>
            <Col md="3">
            <div className="img-container">
                <img
                 src={userprofile.profilepic}
                 className="img-fluid rounded-circle" 
                 alt="dashboard profile"
                />
                </div>
                </Col>
        <Col md="9"> 
            <Row>
                <Col md="6">
                 <FormGroup>
                     <label>Firstname</label>
                   <Input
                    value={userprofile.firstname}
                    type="text"
                    required={true}
                    placeholder="firstname"
                  />
                 </FormGroup>
                </Col>
                <Col md="6">
                 <FormGroup>
                 <label>Lastname</label>
                   <Input
                    value={userprofile.lastname}
                    type="text"
                    required={true}
                    placeholder="lastname"
                  />
                 </FormGroup>
                    </Col>
            </Row>
            <Row>
                <Col md="12">
                <FormGroup>
                <label>Address</label>
                   <Input
                    value={userprofile.address}
                    type="text"
                    placeholder="Chicago illinois, United State"
                  />
                 </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                <FormGroup>
                <label>Age</label>
                   <Input
                    value={userprofile.age}
                    type="text"
                    placeholder={25}
                  />
                 </FormGroup>
                </Col>
            </Row>
        </Col>
             </Row>
            </div>
                 </> : <Spinner />
            }
        </Container>
    </>
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps)(UpdateBasicProfile)