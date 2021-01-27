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
    Button,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
   } from "reactstrap"
import ReactDatetime from "react-datetime"
import Moment from "moment"
import profilepageoneimage from "../../images/regfirstStepPic.jpg"
import { updateOrCreateUserProfile, getProfile } from "../../actions/profile"

const Profilepageone = ({ updateOrCreateProfile, history, profile }) => {

   const [ profileData, upDateProfileData ] = useState({
     firstname: '',
     lastname: '',
     username:'',
     dateofbirth: Moment()
   })

   const [ validationInfo, updateValidationInfo ] = useState({
    validFistname: true,
    validLastName: true,
    validUsername: true
   })

   useEffect(() => {
      if(profile.userprofile !== null){
        let profileFname = profile.userprofile.firstname
        let profileLname = profile.userprofile.lastname
        let profileUname = profile.userprofile.username
        let profiledob = profile.userprofile.dateofbirth
      upDateProfileData({
        firstname: profileFname,
        lastname: profileLname,
        username: profileUname,
        dateofbirth: profiledob
      })  
    }
   }, [profile])

   // block of code to ensure datetimepicker does not 
   // future dates.
   const futureDates = Moment().add(1, 'day')
   const valid = function(current){
     return current.isBefore(futureDates)
   }

   const profileUpdateHandler = (e) => upDateProfileData({
     ...profileData,
     [e.target.name]: e.target.value
   })

   const { firstname, lastname, username, dateofbirth } = profileData
   const { validFistname, validLastName, validUsername } = validationInfo

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
        updateOrCreateProfile(profileData, history, 'profilepagetwo')
    }
return <>
    <section className="profile-page">
        <Container>
            <Row>
                <Col md="5">
          <Card className="shadow">
            <CardBody>
                <h3 className="text-center weighted text-dark text-uppercase mb-4">Please fill in your personal info</h3>
                <Form onSubmit={e => onFormSubmit(e)}>
                <FormGroup>
                    <Input
                    className="form-control-alternative"
                     placeholder="firstname"
                     type="text"
                     value={firstname}
                     name="firstname"
                     required
                     onChange={e => profileUpdateHandler(e)}
                     onBlur={e => checkInputsOnBlur(e, "validFistname")}
                />
                {
                  !validFistname && <p className="form-warning">firstname cannot be empty</p>
                }
             </FormGroup>

            <FormGroup>
                <Input
                    className="form-control-alternative"
                     placeholder="lastname"
                     type="text"
                     value={lastname}
                     name="lastname"
                     required
                     onChange={e => profileUpdateHandler(e)}
                     onBlur={e => checkInputsOnBlur(e, "validLastName")}
                />
                {
                  !validLastName && <p className="form-warning">lastname cannot be empty</p>
                }
            </FormGroup>

        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-calendar-grid-58" />
              </InputGroupText>
            </InputGroupAddon>
            <ReactDatetime
              value={dateofbirth}
              inputProps={{
                placeholder: "Pick Your Date Of Birth",
                required:true,
                readOnly:true
              }}
              timeFormat={false}
              onChange={(e) => upDateProfileData({
                ...profileData,
                dateofbirth: Moment(e.toDate()).format("DD-MM-YYYY")
              })}
              closeOnSelect={true}
              isValidDate={valid}
            />
          </InputGroup>
        </FormGroup>

            <FormGroup>
                <Input
                    className="form-control-alternative"
                     placeholder="username"
                     type="text"
                     value={username}
                     name="username"
                     required
                     onChange={e => profileUpdateHandler(e)}
                     onBlur={e => checkInputsOnBlur(e, "validUsername")}
                />
                {
                  !validUsername && <p className="form-warning">username cannot be empty</p>
                }
            </FormGroup>
                  
                <br/>

          <FormGroup className="centered">
              <Button disabled={ !validFistname || !validLastName || !validUsername } block className="btn-icon" type="submit" color="warning" size="lg">NEXT</Button>
          </FormGroup>
        </Form>

       <div className="dot-container">
         <div className="dotted active-dot"></div>
         <div className="dotted"></div>
         <div className="dotted"></div>
       </div>

      </CardBody>
          </Card>
        </Col>
            <Col md="7">
                <section className="profile-page-image-container">
                  <img className="img-fluid" src={profilepageoneimage} alt="profile page one couple together" />
                </section>
            </Col>
            </Row>
            </Container>
    </section>
</>
}

const mapStateToProps = (state) => ({
  profile : state.profile
})

const mapDispatchToProps = (dispatch) => ({
  updateOrCreateProfile : (profileFormData, history, routeTo) => dispatch(updateOrCreateUserProfile(profileFormData, history, routeTo)),
  getUserProfile: () => dispatch(getProfile())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profilepageone))