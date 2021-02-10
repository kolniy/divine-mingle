import React from "react"
import { Container } from "reactstrap"
import PrivateNavbar from "../../layout/PrivateNavbar"
import FavouriteDisplayContainer from "./FavouriteDisplayContainer"

const FavouriteDisplay = () => {
    return <>
    <section className="favourite-section">
        <PrivateNavbar />
        <br/><br/>
        <Container>
        <h4 className="page-name">Favourite</h4>
        <FavouriteDisplayContainer />
        </Container>    
     </section>
    </>
}

export default FavouriteDisplay