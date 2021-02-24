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
import { updateOrCreateUserProfile } from "../../actions/profile"
import Navbar from "../../components/layout/Navbar"
import axios from "axios"

const Profilepageone = ({ updateOrCreateProfile, history, profile }) => {

   const [ profileData, upDateProfileData ] = useState({
     firstname: '',
     lastname: '',
     username:'',
     dateofbirth: Moment()
   })
   const [ userLocation, setUserLocation ] = useState(null)

   const [ existingUsernamesFromBD, updateExisitUsernamesFromBD ] = useState([])

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

   useEffect(() => { // get user location when components loads
    // when page loads, get user location information
    fetch('https://extreme-ip-lookup.com/json/')
      .then( res => res.json())
      .then(response => {
        const { lat, lon } = response
        setUserLocation(
          {latitude: lat,
           longitude: lon
          })
      })
      .catch((data, status) => {
    console.log('Request failed');
 })
}, [])


   // block of code to ensure datetimepicker does not 
   // future dates.
   const futureDates = Moment().add(1, 'day')
   const valid = function(current){
     return current.isBefore(futureDates)
   }

   const profileUpdateHandler = (e, validationName) => {
    upDateProfileData({
      ...profileData,
      [e.target.name]: e.target.value
      
    })
     if(e.target.value.length === 0){ // update the validation state
    updateValidationInfo({
      ...validationInfo,
      [validationName]: false
    })
   } else if(e.target.value.length > 0) {
    updateValidationInfo({
      ...validationInfo,
      [validationName]: true
    })
   }
   }

   const handleUsernameUpdate = (e, validationName) => { 
    upDateProfileData({
      ...profileData,
      username: e.target.value
    })
    if(e.target.value.length === 0){ // update the validation state
      updateValidationInfo({
        ...validationInfo,
        [validationName]: false
      })
     } else if(e.target.value.length > 0) {
      updateValidationInfo({
        ...validationInfo,
        [validationName]: true
      })
     }
   }

   const getUserProfileNameByInputs = async (searchQuery) => {
    try {
      if(searchQuery.length !== 0){  // if condition to prevent the query from running 
        // when the components just mounts and input is still empty
        const res = await axios.get(`/api/v1/profile/username?username=${searchQuery}`)
        updateExisitUsernamesFromBD(res.data)
      } else {
        return
      }
    } catch (error) {
      console.log(error)
    }
   }

   useEffect(() => {
     if(profileData.username.length !== 0){
      getUserProfileNameByInputs(profileData.username)
     } else {
       return
     }
   }, [profileData.username])

   const { firstname, lastname, username } = profileData
   const { validFistname, validLastName, validUsername } = validationInfo

   const checkInputsOnBlur = (e, validationName) => {
     if(e.target.value.length === 0){
      updateValidationInfo({
        ...validationInfo,
        [validationName]: false
      })
     } else if(e.target.value.length > 0) {
      updateValidationInfo({
        ...validationInfo,
        [validationName]: true
      })
     }
   }

   const onFormSubmit = (e) => {
        e.preventDefault()
        updateOrCreateProfile({
          ...profileData,
          userLocation
        }, history, 'profilepagetwo')
    }
return <>
    <section className="profile-page">
      <Navbar />
        <Container>
            <Row>
                <Col md="5">
          <Card className="slide-in-left">
            <CardBody>
                <h3 className="text-center weighted text-dark text-uppercase">Please fill in your personal info</h3>
                <Form onSubmit={e => onFormSubmit(e)}>
                <FormGroup>
                    <Input
                    className="form-control-alternative input-Style"
                     placeholder="firstname"
                     type="text"
                     value={firstname}
                     name="firstname"
                     required
                     onChange={e => profileUpdateHandler(e, "validFistname")}
                     onBlur={e => checkInputsOnBlur(e, "validFistname")}
                />
                {
                  !validFistname && <p className="form-warning">firstname cannot be empty</p>
                }
             </FormGroup>

            <FormGroup>
                <Input
                    className="form-control-alternative input-Style"
                     placeholder="lastname"
                     type="text"
                     value={lastname}
                     name="lastname"
                     required
                     onChange={e => profileUpdateHandler(e, "validLastName")}
                     onBlur={e => checkInputsOnBlur(e, "validLastName")}
                />
                {
                  !validLastName && <p className="form-warning">lastname cannot be empty</p>
                }
            </FormGroup>

        <FormGroup>
          <InputGroup className="input-group-alternative input-Style">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-calendar-grid-58" />
              </InputGroupText>
            </InputGroupAddon>
            <ReactDatetime
              inputProps={{
                placeholder: "Pick Your Date Of Birth",
                required:true,
                readOnly:true
              }}
              timeFormat={false}
              onChange={(e) => {
                upDateProfileData({
                  ...profileData,
                  dateofbirth: Moment(e.toDate()).format("MM-DD-YYYY")
                })
              }}
              closeOnSelect={true}
              isValidDate={valid}
            />
          </InputGroup>
        </FormGroup>

            <FormGroup>
                <Input
                    className="form-control-alternative input-Style"
                     placeholder="username"
                     type="text"
                     value={username}
                     name="username"
                     required
                     onChange={e => handleUsernameUpdate(e, "validUsername")}
                     onBlur={e => checkInputsOnBlur(e, "validUsername")}
                />
                {
                  !validUsername && <p className="form-warning">username cannot be empty</p>
                }
                {
                  existingUsernamesFromBD.length > 0 && <p className="form-warning">username already exists</p>
                }
            </FormGroup>

          <FormGroup className="centered btn-custom-style">
              <Button disabled={ 
                  !validFistname ||  // disable button on empty firstname
                  !validLastName ||  // disable button on empty lastname
                  !validUsername ||  // disable button on empty username
                  existingUsernamesFromBD.length > 0  // disable button when inputed already username exists
                   } block className="btn-icon"
                    type="submit" color="warning" 
                    size="lg">NEXT</Button>
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
                <section className="profile-page-image-container slide-in-right">
                  <img src={profilepageoneimage} alt="profile page one couple together" />
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
  updateOrCreateProfile : (profileFormData, history, routeTo) => dispatch(updateOrCreateUserProfile(profileFormData, history, routeTo))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profilepageone))