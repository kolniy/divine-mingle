import React from "react"
import { Link } from "react-router-dom"
import { 
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from "reactstrap"
import profileTestImage from "../../../images/profile-test-image.jpg"

const Navlinks = () => (
    <>
    <Nav className="ml-small" navbar>
                  <NavItem>
                    <NavLink tag={Link} to="/dashboard/home">
                      <i className="fa fa-home icon-size" />
                      <span className="nav-link-inner--text d-lg-none">
                        Home
                      </span>
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav className="nav-link-icon">
                    <i className="fa fa-bell icon-size" />
                      <span className="notification-badge">100</span>
                      <span className="nav-link-inner--text d-lg-none">
                        Notifications
                      </span>
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="notification_dropdown"
                      right
                    >
                    <div className="dropdown-item-container">
                      <DropdownItem className="text-center">
                       <p><i className="fa fa-bell" /> {" "} Notifications</p>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/dashboard/messages">
                          <i className="fa fa-envelope" /> 
                          <span className="ml-4"> Messages</span>
                          <span className="ml-4 dropdown-item-badge-colored">40</span>
                          </Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to="/dashboard/visitors">
                      <i className="fa fa-user" />
                       <span className="ml-4">visitors</span>
                       <span className="ml-4 dropdown-item-badge-default">24</span>
                      </Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to="/dashboard/match">
                      <i className="fa fa-heart" />
                       <span className="ml-4">Matches</span>
                       <span className="ml-4 dropdown-item-badge-default">50</span>
                      </Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to="/dashboard/favourite">
                      <i className="fa fa-star" />
                      <span className="ml-4 dropdown">Favourites</span>
                      <span className="ml-4 dropdown-item-badge-default">70</span>
                      </Link>
                      </DropdownItem>
                    </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
          </Nav>
        <Nav className="align-items-lg-center ml-lg-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                      <img className="avatar rounded-circle" src={profileTestImage} alt="navbar profile display" />
                      <span className="nav-link-inner--text d-lg-none">
                        Mary Amaka
                      </span>
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="notification_dropdown"
                      right
                    >
                    <div className="dropdown-item-container">
                      <DropdownItem className="text-center">
                       <p><img className="avatar rounded-circle mr-2" src={profileTestImage} alt="navbar profile display" /> {" "} Mary Amaka</p>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/dashboard/profile">
                            Dashboard
                          </Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to="/dashboard/settings">
                        Settings
                      </Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to="/dashboard/forum">
                        Divine Mingle Forums
                      </Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to="/dashboard/services">
                        Customer Service
                      </Link>
                      </DropdownItem>
                      <DropdownItem>
                      <Link to="/dashboard/faq">
                        FAQ
                      </Link>
                      </DropdownItem>
                    </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
        </Nav>
    </>
)

export default Navlinks