const determineMatchingStrength = (profile, userTobeMatchedInterests) => {
    let matchingStrength = 0
    let profilesInterest = profile.interests.map((interest) => interest.interestName)
        for(let i = 0; i < userTobeMatchedInterests.length; i++){
            if(profilesInterest.indexOf(userTobeMatchedInterests[i]) > -1){
                matchingStrength++
            }
        }
    return matchingStrength
}

export default determineMatchingStrength