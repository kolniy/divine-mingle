import React from "react"
import { ListGroup, ListGroupItem } from "reactstrap"
import InterestItem from "./InterestItem"

const InterestList = ({ searchResults, addNewInterestItem }) => {
    return( 
        searchResults.length === 0 ? 
        <ListGroup>
            <ListGroupItem>No Matching Interest</ListGroupItem>
        </ListGroup> : 
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