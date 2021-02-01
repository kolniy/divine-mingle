import React from "react"
import { ListGroupItem } from "reactstrap"

const InterestItem = ({ item, addNewInterestItem }) => {
    return <ListGroupItem onClick={e => addNewInterestItem(item)}>{item.interestName}</ListGroupItem>
}

export default InterestItem