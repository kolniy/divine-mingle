import React from "react"
import { Container, Row, Col, Card, Form, FormGroup, Button, CardBody } from "reactstrap"

const Profilepagethree = () => {
    return <>
    <section className="profile-page">
        <Container>
            <Row>
                <Col md="4"></Col>
                <Col md="4">
                <Card className="shadow">
            <CardBody>
                <h3 className="text-center weighted text-dark text-uppercase mb-4">Upload your display picture</h3>
                <Form>
                             
                <br/>

          <FormGroup className="centered">
              <Button block className="btn-icon" type="submit" color="warning" size="lg">UPLOAD</Button>
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
                <Col md="4"></Col>
            </Row>
        </Container>
    </section>
</>
}

export default Profilepagethree