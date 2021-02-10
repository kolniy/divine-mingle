import React from "react"
import VisitorsDisplayItem from "./VisitorsDisplayItem"
import { Row } from "reactstrap"
import edsheranImage from "../../../images/edsheran-card-display.jpg"
import elonMuskImage from "../../../images/elon-musk-card-display.jpg"
import elvisPresleyImage from "../../../images/elvis-card-display.jpg"
import mjCardImage from "../../../images/mj-card-display.jpg"
import jonBellion from "../../../images/jon-bellion-card-display.jpeg"


const VisitorsDisplayContainer = () => {
    return <>
    <div className="visitors-display-container">
        <Row>
            <VisitorsDisplayItem cardImage={jonBellion} profileName="Jon Bellion" />
            <VisitorsDisplayItem cardImage={edsheranImage} profileName="ed sheran" />
            <VisitorsDisplayItem cardImage={elonMuskImage} profileName="Elon Musk" />
            <VisitorsDisplayItem cardImage={elvisPresleyImage} profileName="Elvis Presley" />
            <VisitorsDisplayItem cardImage={mjCardImage} profileName="micheal jackson" />
            <VisitorsDisplayItem cardImage={elonMuskImage} profileName="Elon Musk"  />
        </Row>
    </div>
    </>
}

export default VisitorsDisplayContainer