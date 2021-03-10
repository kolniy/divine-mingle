import React, { useState } from "react"
import classnames from "classnames"
import {
    Container, 
    Card,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane
} from "reactstrap"
import UpdateAboutProfile from "./UpdateAboutProfile"
import UpdateProfileQuestions from "./UpdateProfileQuestions"    

const UserUpdateProfileTabs = () => {

    const [tabs, setTabs] = useState(1)
    const toggleNavs = (e, index) => {
        e.preventDefault()
        setTabs(index)
    }

    return <>
     <div className="tabs-section">
        <Container>
    <div className="tabs-container">
        <Nav
            className="flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: tabs === 1
                })}
                onClick={e => toggleNavs(e, 1)}
                href="#pablo"
                role="tab"
              >
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: tabs === 2
                })}
                onClick={e => toggleNavs(e, 2)}
                href="#pablo"
                role="tab"
              >
                QUESTONS
              </NavLink>
            </NavItem>
          </Nav>
    </div>
    <Card>
        <CardBody>
            <TabContent activeTab={"tabs" + tabs}>
                <TabPane tabId="tabs1">
                    <UpdateAboutProfile />
                </TabPane>
                <TabPane tabId="tabs2">
                    <UpdateProfileQuestions/>
                </TabPane>
            </TabContent>
        </CardBody>
    </Card>
        </Container>
    </div>
    </>
}

export default UserUpdateProfileTabs