import React from "react"
import PrivateNavbar from "../../layout/PrivateNavbar"
import { Container } from "reactstrap"
import ForumsContainer from "./Forums-container"

const ForumsDisplay = () => {
    return <>
        <section className="forums-section">
            <PrivateNavbar />
            <br/><br/>
            <Container>
            <p className="page-text">Read Inspirational articles from Religious people of God</p>
            <ForumsContainer />
            </Container>
        </section>
    </>
}

export default ForumsDisplay
