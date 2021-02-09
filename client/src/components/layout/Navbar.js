import React from "react"
import { Link } from "react-router-dom"
import {
    NavbarBrand,
    Navbar,
    Container,
  } from "reactstrap";
  import Logo from "../../images/divineminglelogo.png"

const Navigationbar = ({ auth }) => {
  return <>
    <Navbar
          className="navbar-horizontal navbar-dark bg-warning custom-navbar-styles"
          expand="lg"
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
             <img className="logo-style" src={Logo} alt="divine mingle logo" />
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
          </Container>
        </Navbar>
  </>
}


export default Navigationbar