import React from "react"
import MatctDisplayItem from "./MatchDisplayItem"
import { Row } from "reactstrap"

const MatchsDisplayContainer = ({ matches }) => {
    return <>
    <div className="match-display-container">
        <Row>
            {
                matches.length === 0 ? 
                <p className="text-center lead">No Matches Found</p> : 
                <>
                    {
                        matches.map((match) => <MatctDisplayItem key={match._id}
                        cardImage={match.profilepic}
                         profileName={`${match.firstname} ${match.lastname}`}
                         distanceApart={match.distance}
                         strengthCount={match.matchingCount}
                         userId = {match._id}
                          />)
                    }
                </>
            }
        </Row>
    </div>
    </>
}

export default MatchsDisplayContainer
