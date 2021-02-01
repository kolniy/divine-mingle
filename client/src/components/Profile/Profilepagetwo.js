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
import dropDownData from "../../temp/dropDownData"
import filterInterestOnType from "../../utilities/filterInterestOnUserType"
import InterestList from "./interests/InterestList"
import PickedInterest from "./interests/PickedInterest"

const Profilepagetwo = ({ updateOrCreateProfile, history, profile }) => {

        const [ profileData, upDateProfileData ] = useState({
            ethnicity:'',
            denomination:'',
            interests:[]
        })

        const [ validationInfo, updateValidationInfo ] = useState({
            validEthnicity:true,
            validDenomination:true,
            validInterest:true
        })

        const [interestInput, updateInterestInput] = useState('')

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
                let profileInterests = profile.userprofile.interests
                upDateProfileData({
                    ethnicity: profileEthnic,
                    denomination: profileDeno,
                    interests: profileInterests
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

        const addNewInterestItem = (item) => {
            upDateProfileData({
                ...profileData,
                interests: [
                    ...profileData.interests,
                    item
                ]
            })
            updateInterestInput('')  // empty the interest seachbox query to remove the dropdown
        }

        const removeInterestItem = (item) => {
            upDateProfileData({
                ...profileData,
                interests: interests.filter((interest) => interest.id !== item.id)
            })
        }

        const filterInterestOnInput = (e) => {  // used for the interest input to filter interest based on user input
            updateInterestInput(e.target.value)
        }

        const onFormSubmit = (e) => {
            e.preventDefault()
            updateOrCreateProfile(profileData, history, 'profilepagethree')
        }

    return <>
        <section className="profile-page">
        <Container>
            <Row>
                <Col md="5">
          <Card className="shadow slide-in-left">
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
                     placeholder="Start typing to see and choose your interest from the list"
                     type="text"
                     value={interestInput}
                     name="interests"
                     onChange={e => filterInterestOnInput(e)}
                     onBlur={e => checkInputsOnBlur(e, "validInterest")}
                />
                {
                    interests.length === 0 ?
                     <p className="form-warning">you must select at least one interest</p> : 
                     <PickedInterest interestData={interests} removeInterestItem={removeInterestItem} />
                }
                {
                    interestInput.length > 0 && <>
                <div className="interest-list-container">
                    {
                        <InterestList addNewInterestItem={addNewInterestItem} searchResults={filterInterestOnType(dropDownData, interestInput)} />
                    }
                </div>
                    </>
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
                <section className="profile-page-image-container slide-in-right">
                  <img src={profilepagetwoimage} alt="profile page one couple together" />
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