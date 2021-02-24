import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { 
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from "reactstrap"
import { logout } from "../../../actions/auth"

const Navlinks = ({ logout, matches, profile:{
  userprofile,
  profileLoading
} }) => {

const handleLogOut = (e) => {
    e.preventDefault()
    logout()
}

  return (
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
                      <DropdownItem className="text-center">
                      <div className="dropdown-item-container">
                       <p><i className="fa fa-bell mr-3" /> {" "} Notifications</p>
                      <DropdownItem divider />
                      </div>
                      </DropdownItem>
                      <DropdownItem>
                      <div className="dropdown-item-container">
                        <Link to="/dashboard/messages">
                          <i className="fa fa-envelope" /> 
                          <span className="ml-4"> Messages</span>
                          <span className="ml-4 dropdown-item-badge-colored">40</span>
                          </Link>
                        </div>
                      </DropdownItem>
                      <DropdownItem>
                      <div className="dropdown-item-container">
                      <Link to="/dashboard/visitors">
                      <i className="fa fa-user" />
                       <span className="ml-4">visitors</span>
                       <span className="ml-4 dropdown-item-badge-default">24</span>
                      </Link>
                    </div>
                      </DropdownItem>
                  <DropdownItem>
                    <div className="dropdown-item-container">
                      <Link to="/dashboard/match">
                      <i className="fa fa-heart" />
                       <span className="ml-4">Matches</span>
                       <span className="ml-4 dropdown-item-badge-default">{ matches.matchCount }</span>
                      </Link>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                  <div className="dropdown-item-container">
                      <Link to="/dashboard/favourite">
                      <i className="fa fa-star" />
                      <span className="ml-4 dropdown">Favourites</span>
                      <span className="ml-4 dropdown-item-badge-default">70</span>
                      </Link>
                    </div>
                     </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
          </Nav>
        <Nav className="align-items-lg-center ml-lg-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav>
                      <img className="avatar rounded-circle"
                       src={ 
                         userprofile !== null && !profileLoading && userprofile.profilepic
                       }
                       alt="navbar profile display" />
                      <span className="nav-link-inner--text d-lg-none">
                        {
                          userprofile !== null && !profileLoading ? `${userprofile.firstname} ${userprofile.lastname}` : ""
                        }
                      </span>
                    </DropdownToggle>
                    <DropdownMenu
                      aria-labelledby="notification_dropdown"
                      right
                    >
                      <DropdownItem className="text-center">
                      <div className="dropdown-item-container">
                       <p><img className="avatar rounded-circle mr-2"
                        src={ 
                          userprofile !== null && !profileLoading && userprofile.profilepic
                        }
                        alt="navbar profile display" /> 
                        {" "} 
                        {
                          userprofile !== null && !profileLoading ? `${userprofile.firstname} ${userprofile.lastname}` : ""
                        }
                        </p>
                      <DropdownItem divider />
                      </div>
                      </DropdownItem>
                      <DropdownItem>
                        <div className="dropdown-item-container">
                        <Link to="/dashboard/profile">
                            Dashboard
                          </Link>
                        </div>
                      </DropdownItem>
                      <DropdownItem>
                       <div className="dropdown-item-container">
                      <Link to="/dashboard/settings">
                        Settings
                      </Link>
                      </div>
                      </DropdownItem>
                      <DropdownItem>
                      <div className="dropdown-item-container">
                      <Link to="/dashboard/forum">
                        Divine Mingle Forums
                      </Link>
                      </div>
                      </DropdownItem>
                      <DropdownItem>
                      <div className="dropdown-item-container">
                      <Link to="/dashboard/services">
                        Customer Service
                      </Link>
                      </div>
                      </DropdownItem>
                      <DropdownItem>
                      <div className="dropdown-item-container">
                      <Link to="/dashboard/faq">
                        FAQ
                      </Link>
                      </div>
                      </DropdownItem>
                      <DropdownItem>
                      <div className="dropdown-item-container">
                      <Link onClick={e => handleLogOut(e)}>
                       Sign Out
                      </Link>
                      </div>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
        </Nav>
    </>
)
}

const mapStateToProps = (state) => ({
  matches: state.matches,
  profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navlinks)