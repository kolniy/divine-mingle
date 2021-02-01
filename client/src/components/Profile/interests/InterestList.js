import React from "react"
import { ListGroup } from "reactstrap"
import InterestItem from "./InterestItem"

const InterestList = ({ searchResults, addNewInterestItem }) => {
    return( 
        searchResults.length === 0 ? 
        <p className="lead text-center">No matching interest</p> : 
        <>
        <ListGroup>
            {
                searchResults.map((result) => <InterestItem key={result.id}
                 item={result} 
                 addNewInterestItem={addNewInterestItem}
             />)
            }
        </ListGroup>
    </>
    )
}

export default InterestList