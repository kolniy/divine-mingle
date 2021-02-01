import React from "react"
import { Badge } from "reactstrap"

const PickedInterest = ({ interestData, removeInterestItem }) => {

    return <>
        <div className="picked-interest">
        {
          interestData.map((interest) =>
              <Badge key={interest.id} color="warning" pill className="mr-1 mt-1">
              {
                  interest.interestName
              }
              <span key={interest.id} onClick={e => removeInterestItem(interest) } className="remove-interest-span">x</span>
          </Badge>)
      }
        </div>
    </>
}

export default PickedInterest