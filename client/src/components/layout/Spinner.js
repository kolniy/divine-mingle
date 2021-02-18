import React from "react"
import { Row, Col  } from "reactstrap"

const Spinner = () => (
    <Row>
    <Col md="4" sm="4"></Col>
    <Col md="4" sm="4">
        <div className="spinner-wrapper">
          <div className="spinner spinner1">
          </div>
        </div>
    </Col>
    <Col md="4" sm="4"></Col>
    </Row>
)

export default Spinner