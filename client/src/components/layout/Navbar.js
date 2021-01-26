import React from "react"
import { Link } from "react-router-dom"
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    Nav,
    Container,
    Row,
    Col
  } from "reactstrap";

const Navigationbar = () => (
    <Navbar
          className="navbar-horizontal navbar-dark bg-warning custom-navbar-styles"
          expand="lg"
        >
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
             Divine Mingle
            </NavbarBrand>
            <button
              aria-controls="navbar-warning"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-warning"
              data-toggle="collapse"
              id="navbar-warning"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbar-warning">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                        <h2>Divine Mingle</h2>
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-warning"
                      aria-expanded={false}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-warning"
                      data-toggle="collapse"
                      id="navbar-warning"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
)

export default Navigationbar