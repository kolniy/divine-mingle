import React from "react"
import { Link } from "react-router-dom"
import { Nav,
    Button,
    NavItem,
    NavLink,
    UncontrolledTooltip,
} from "reactstrap"

const Navlinks = () => (
    <>
    <Nav className="ml-small" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/about">
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/services">
                      Services
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/contact">
                     Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
               <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/creativetim"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/creativetimofficial"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/creativetim"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-lg-block ml-lg-4">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      tag={Link}
                      to="/login"
                    >
                      <span className="btn-inner--icon">
                      <i className="ni ni-single-02"></i>
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Login
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
    </>
)

export default Navlinks