
const sortProfilesByLocation = (profilesData) => {
    return profilesData.sort((a, b) => {
        return  a.distance - b.distance
    })
}
   

export default sortProfilesByLocation