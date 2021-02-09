import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
    Container,
    Row,
    Input,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    Button
} from "reactstrap"
import Navbar from "../../components/layout/Navbar"
import { loginUser } from "../../actions/auth"

const Login = ({ login, history }) => {

    const [ userCred, updateUserCred ] = useState({
        email:'',
        password:''
    })

    const { email, password } = userCred

    const onInputValueChange = (e) => updateUserCred({
        ...userCred,
        [e.target.name]: e.target.value
    })

    const loginSubmit = (e) => {
        e.preventDefault()
        login(userCred, history)
    }

    return <>
        <section className="section-login">
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <Container>
                <Row>
                <Col md="4"></Col>
                <Col md="4">
                    <Card>
                    <h4 className="text-center text-dark header-style">
                            Login</h4>
                    <CardBody>
                <Form onSubmit={e => loginSubmit(e)}>
                <FormGroup className="form-group-margin">
                    <Input
                    className="form-control-alternative input-style"
                     placeholder="yourname@mail.com"
                     type="email"
                     value={email}
                     name="email"
                     required
                     onChange={ e => onInputValueChange(e)}
                />
            </FormGroup>
            <FormGroup className="form-group-margin">
                    <Input
                    className="form-control-alternative input-style"
                     placeholder="password"
                     type="password"
                     value={password}
                     name="password"
                     required
                     onChange={ e => onInputValueChange(e)}
                />
            </FormGroup> 
            <FormGroup className="centered">
              <Button type="submit" color="warning" size="lg"> Login </Button>
          </FormGroup>
            </Form>
        </CardBody>
        </Card>
     </Col>
                <Col md="4"></Col>
                </Row>
            </Container>
        </section>
    </>
}

const mapDispatchToProp = (dispatch) => ({
    login: (userCred, history) => dispatch(loginUser(userCred, history))
})

export default connect(null, mapDispatchToProp)(withRouter(Login))