
const sortProfilesByLocation = (profilesData) => {
    return profilesData.sort((a, b) => {
        return b.location - a.location 
    })
}
   

export default sortProfilesByLocation