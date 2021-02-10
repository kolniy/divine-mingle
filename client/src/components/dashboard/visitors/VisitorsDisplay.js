import React from "react"
import { Container } from "reactstrap"
import PrivateNavbar from "../../layout/PrivateNavbar"
import VisitorsDisplayContainer from "./VisitorsDisplayContainer"

const VisitorsDisplay = () => {
    return <>
    <section className="visitors-section">
        <PrivateNavbar />
        <br/><br/>
        <Container>
        <h4 className="page-name">Visitors</h4>
        <VisitorsDisplayContainer />
        </Container>    
     </section>
    </>
}

export default VisitorsDisplay