import React from "react"
import { connect } from "react-redux"
import { Row, Col, FormGroup, Input } from "reactstrap"
import Spinner from "../../layout/Spinner"

const UpdateAboutProfile = ({ profile: {
   userprofile,
   profileLoading
} }) => {
   return <>
      {
         !profileLoading && userprofile !== null ? 
         <>
            <Row>
               <Col md="1"></Col>
               <Col md="11">
                  <div className="update-profile-about">
                     <Row>
                     <Col md="12">
                        <FormGroup>
                           <label>About Me</label>
                           <Input
                         placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                         tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                         suspendisse ultrices gravida. Risus commodo viverra maecenas
                         accumsan lacus vel facilisis. "
                         rows="4"
                         type="textarea"
                        />
                        </FormGroup>
                     </Col>
                     </Row>
                  </div>
               </Col>
            </Row>
         </> : <Spinner />
      }
   </>
}

const mapStateToProps = (state) => ({
   profile: state.profile
})

export default connect(mapStateToProps)(UpdateAboutProfile)