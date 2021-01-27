import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { Container,
    Row,
    Col,
    Card,
   CardBody,
   Form,
   FormGroup,
   Input,
   Button
  } from "reactstrap"
import profilepagetwoimage from "../../images/regsecondStep.jpg"
import { updateOrCreateUserProfile } from "../../actions/profile"

const Profilepagetwo = ({ updateOrCreateProfile, history, profile }) => {

        const [ profileData, upDateProfileData ] = useState({
            ethnicity:'',
            denomination:'',
            interests:''
        })

        const [ validationInfo, updateValidationInfo ] = useState({
            validEthnicity:true,
            validDenomination:true,
            validInterest:true
        })

        const profileUpdateHandle = (e) => upDateProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        })

        const { ethnicity, denomination, interests } = profileData
        const { validEthnicity, validDenomination, validInterest } = validationInfo

        useEffect(() => {
            if(profile.userprofile !== null){
                let profileEthnic = profile.userprofile.ethnicity
                let profileDeno = profile.userprofile.denomination
                let profileInt = profile.userprofile.interests
                upDateProfileData({
                    ethnicity: profileEthnic,
                    denomination: profileDeno,
                    interests: profileInt.join()
                })
            }
        }, [profile])

        const checkInputsOnBlur = (e, validationName) => {
            if(e.target.value.length === 0){
                updateValidationInfo({
                  ...validationInfo,
                  [validationName]: false
                })
               } else {
                updateValidationInfo({
                  ...validationInfo,
                  [validationName]: true
                })
               }
        }

        const onFormSubmit = (e) => {
            e.preventDefault()
            updateOrCreateProfile(profileData, history, 'Profilepagethree')
        }

    return <>
        <section className="profile-page">
        <Container>
            <Row>
                <Col md="5">
          <Card className="shadow">
            <CardBody>
                <h3 className="text-center weighted text-dark text-uppercase mb-4">More Information about yourself</h3>
                <Form onSubmit={onFormSubmit}>
                <FormGroup>
                    <Input
                    className="form-control-alternative"
                     placeholder="ethnicity"
                     type="text"
                     value={ethnicity}
                     name="ethnicity"
                     required
                     onChange={e => profileUpdateHandle(e)}
                     onBlur={e => checkInputsOnBlur(e, "validEthnicity")}
                />
                {
                    !validEthnicity && <p className="form-warning">ethnicity cannot be empty</p>
                }
             </FormGroup>

            <FormGroup>
                <Input
                    className="form-control-alternative"
                     placeholder="denomination"
                     type="text"
                     value={denomination}
                     name="denomination"
                     required
                     onChange={e => profileUpdateHandle(e)}
                     onBlur={e => checkInputsOnBlur(e, "validDenomination")}
                />
                {
                    !validDenomination && <p className="form-warning">denomination cannot be empty</p>
                }
            </FormGroup>

            <FormGroup>
                <Input
                    className="form-control-alternative"
                     placeholder="Enter your comma seperated interests..."
                     type="text"
                     value={interests}
                     name="interests"
                     required
                     onChange={e => profileUpdateHandle(e)}
                     onBlur={e => checkInputsOnBlur(e, "validInterest")}
                />
                {
                    !validInterest && <p className="form-warning">interest's cannot be empty</p>
                }
            </FormGroup>
                  
                <br/>

          <FormGroup className="centered">
              <Button disabled={ !validEthnicity || !validInterest || !validDenomination } block className="btn-icon" type="submit" color="warning" size="lg">NEXT</Button>
          </FormGroup>
        </Form>

       <div className="dot-container">
         <div className="dotted active-dot"></div>
         <div className="dotted active-dot"></div>
         <div className="dotted"></div>
       </div>

      </CardBody>
          </Card>
        </Col>
            <Col md="7">
                <section className="profile-page-image-container">
                  <img className="img-fluid" src={profilepagetwoimage} alt="profile page one couple together" />
                </section>
            </Col>
            </Row>
            </Container>
    </section>
    </>
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  updateOrCreateProfile : (profileFormData, history, routeTo) => dispatch(updateOrCreateUserProfile(profileFormData, history, routeTo))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profilepagetwo))