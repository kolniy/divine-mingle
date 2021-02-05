import React, { useState } from "react"
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux"
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button } from "reactstrap"
import { signUpUser } from "../../actions/auth"
import validateAnEmail from "../../utilities/validateEmail"

const RegisterPageOne = ({ register, history }) => {

    const [ formFields, updateFormFields ] = useState({
        email: '',
        password: ''
    })
    
    const [ validateForm, updateValidateForm ] = useState({
        validPasswordCheck : true,
        validEmailCheck : true
    })
    
    const { email, password } = formFields
    const { validPasswordCheck, validEmailCheck } = validateForm
    
    const onFormSubmit = (e) => {
        e.preventDefault()
        register(formFields, history)
    }
    
    const onEmailValueChange = (e) => {
        updateFormFields({
            ...formFields,
            email: e.target.value
        })
        if(validateAnEmail(email)){ // if email is valid set button boolean variable to false,
            updateValidateForm({    // hence button is clickable
                ...validateForm,
                validEmailCheck: false
            })
        } else {
            updateValidateForm({   
                ...validateForm,
                validEmailCheck: true
            })
        }
    }
    
    const onPasswordValueChane = (e) => {
        updateFormFields({  
            ...formFields,
            password: e.target.value
        })
        if(password.length >= 6){ // if password length is greater that 6, set boolean variable to false
            updateValidateForm({  // hence button is clickable
                ...validateForm,
                validPasswordCheck: false
            })
        } else {
            updateValidateForm({
                ...validateForm,
                validPasswordCheck: true
            })
        }
    }

    return <>
        <section className="register-page-one">
           <div className="register-cta">
           <Container>
                <Row>
                    <Col md="8">
                    <h1 className="display-1 cta-heading">Join <span>divine mingle</span>
                     today and find your christian soulmate</h1>
                    </Col>
        <Col md="4">
        <Card className="shadow">
            <CardBody>
                <div className="form-info">
                <h3 className="text-center site-theme">Divine Mingle</h3>
                <h4 className="text-center text-dark">Sign up</h4>
                </div>
                <Form onSubmit={e => onFormSubmit(e)}>
                <input type="hidden" value="something"/>
                <FormGroup>
                    <Input
                    className="form-control-alternative input-style"
                     placeholder="yourname@mail.com"
                     type="email"
                     value={email}
                     name="email"
                     required
                     onChange={ e => onEmailValueChange(e)}
                />
                {
                    email.length > 0 && validEmailCheck && <p className="form-warning">Input a valid email address</p>
                }
             </FormGroup>
            <FormGroup>
                <Input
                    className="form-control-alternative input-style"
                     placeholder="password"
                     type="password"
                     value={password}
                     name="password"
                     required
                     onChange={ e => onPasswordValueChane(e)}
                />
                    {
                        password.length <= 6 && password.length > 0 && <p className="form-warning">Password Field must be more than 6 characters</p>
                    }
                    </FormGroup>
                    <br/>
          <FormGroup className="centered">
              <Button className="btn-icon" disabled={validPasswordCheck || validEmailCheck } type="submit" color="warning" size="lg"> Sign Up {"  "} <i className="fa fa-user" aria-hidden="true"></i> </Button>
          </FormGroup>
          <p className="text-center text-dark login-details">Already Have An Account? <Link className="site-theme" to="/login">Login</Link></p>
                </Form>
            </CardBody>
          </Card>
         </Col>   
        </Row>
         </Container>
      </div>
        </section>
    </>
}

const mapDispatchToProps = (dispatch) => ({
    register : (userDetails, history) => dispatch(signUpUser(userDetails, history))
})

export default connect(null, mapDispatchToProps)(withRouter(RegisterPageOne))