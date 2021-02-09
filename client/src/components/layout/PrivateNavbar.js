import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    Container,
    Row,
    Col,
  } from "reactstrap";
  import Logo from "../../images/divineminglelogo.png"
  import NavlinkSearch from "./navlinks/NavlinkSearchInput"
  import Navlinks from "./navlinks/Navlinks"

const Navigationbar = ({ auth }) => {
  return <>
    <Navbar
          className="navbar-horizontal navbar-dark bg-warning private-navbar"
          expand="lg"
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
             <img className="logo-style" src={Logo} alt="divine mingle logo" />
            </NavbarBrand>
            <NavlinkSearch />
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
               <Navlinks />
            </UncontrolledCollapse>
          </Container>
        </Navbar>
  </>
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Navigationbar)