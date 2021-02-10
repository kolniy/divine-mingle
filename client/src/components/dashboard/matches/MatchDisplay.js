import React from "react"
import { Container } from "reactstrap"
import PrivateNavbar from "../../layout/PrivateNavbar"
import MatchDisplayContainer from "./MatchDisplayContainer"

const MatchDisplay = () => {
    return <>
    <section className="match-section">
        <PrivateNavbar />
        <br/><br/>
        <Container>
        <h4 className="page-name">Matches</h4>
        <MatchDisplayContainer />
        </Container>    
     </section>
    </>
}

export default MatchDisplay