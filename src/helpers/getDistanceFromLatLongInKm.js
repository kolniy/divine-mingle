const deg2rad = (deg) => {
    return deg * (Math.PI/180)
}

const getDistanceFromLatLongInKm = (lat1, lon1, lat2, lon2) => {
    if((lat1 == lat2) && (lon1 == lon2)){
        return 0
    }
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad above
    let dLon = deg2rad(lon2-lon1); 
    let a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  let d = R * c; // Distance in km
  return d;
}

export default getDistanceFromLatLongInKm

// formula for calculating lat and longitude gotten from stack overflow 
// see more here https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula