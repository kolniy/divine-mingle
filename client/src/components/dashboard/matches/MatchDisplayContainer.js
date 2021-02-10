import React from "react"
import MatctDisplayItem from "./MatchDisplayItem"
import { Row } from "reactstrap"
import edsheranImage from "../../../images/edsheran-card-display.jpg"
import elonMuskImage from "../../../images/elon-musk-card-display.jpg"
import elvisPresleyImage from "../../../images/elvis-card-display.jpg"
import mjCardImage from "../../../images/mj-card-display.jpg"
import jonBellion from "../../../images/jon-bellion-card-display.jpeg"


const MatchsDisplayContainer = () => {
    return <>
    <div className="match-display-container">
        <Row>
            <MatctDisplayItem cardImage={jonBellion} profileName="Jon Bellion" />
            <MatctDisplayItem cardImage={elvisPresleyImage} profileName="Elvis Presley" />
            <MatctDisplayItem cardImage={mjCardImage} profileName="micheal jackson" />
            <MatctDisplayItem cardImage={elonMuskImage} profileName="Elon Musk"  />
            <MatctDisplayItem cardImage={edsheranImage} profileName="ed sheran" />
            <MatctDisplayItem cardImage={elonMuskImage} profileName="Elon Musk" />
        </Row>
    </div>
    </>
}

export default MatchsDisplayContainer