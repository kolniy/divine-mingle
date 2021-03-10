import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
    Container,
    Col,
    Row,
    Button
} from "reactstrap"
import Spinner from "../../layout/Spinner"


const BasicProfileInfo = ({ profile: {
    userprofile,
    profileLoading
} }) => {

    const calculateAgeFromDOB = (dateofbirth) => {
        let today = new Date()
        let birthDate = new Date(dateofbirth)

        let age = today.getFullYear() - birthDate.getFullYear()
        let m = today.getMonth() - birthDate.getMonth()
        if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
            age--
        }

        return age
    }

    return <>
         <Container>
           {
               !profileLoading && userprofile !== null ?
               <>
                <div className="profile-info">
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
                    <div className="profile-details-container">
                        <h1 className="profile-name">{`${userprofile.firstname} ${userprofile.lastname}`}</h1>
                        <p className="profile-age-and-location">{calculateAgeFromDOB(userprofile.dateofbirth)}
                            <span className="profile-location">{userprofile.address ? userprofile.address : "Address not specified, Update Profile"}</span>
                        </p>
                        <Button tag={Link} to={`/dashboard/profile/update`} className="update-profile-button" color="warning">Update Info</Button>
                    </div>
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

export default connect(mapStateToProps)(BasicProfileInfo)