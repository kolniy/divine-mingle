import React from "react"
import { connect } from "react-redux"
import {
    Container,
    Col,
    Row,
    Button
} from "reactstrap"
import Spinner from "../../layout/Spinner"

const BasicProfileInfo = ({ profile: {
    otherUserProfile,
    otherUserProfileLoading
} }) => {

    const calculateAgeFromDOB = (dateofbirth) => {
        let today = new Date()
        let birthDate = new Date(dateofbirth.toString())

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
                 !otherUserProfileLoading && otherUserProfile !== null ? 
                 <>
                    <div className="profile-info">
               <Row>
            <Col md="3">
                <div className="img-container">
                <img
                 src={otherUserProfile.profilepic}
                 className="img-fluid rounded-circle" 
                 alt="dashboard profile"
                />
                </div>
            </Col>
                <Col md="9">
                    <div className="profile-details-container">
                        <h1 className="profile-name">{`${otherUserProfile.firstname} ${otherUserProfile.lastname}`}</h1>
                        <p className="profile-age-and-location">{calculateAgeFromDOB(otherUserProfile.dateofbirth)}
                            <span className="profile-location">Chicago illinois, United States</span>
                        </p>
                        <Button className="update-profile-button" color="warning">Send Message</Button>
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


