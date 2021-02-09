import React from "react"
import { 
    Form,
    FormGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    InputGroup,
} from "reactstrap"

const NavlinkSearch = () => {
    return <>
    <div className="navlink-search">
        <Form className="navbar-search navbar-search-dark form-inline mr-5 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <Input placeholder="Search" type="text" />
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Form>
        </div>
    </>
}

export default NavlinkSearch