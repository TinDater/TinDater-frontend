/** 브라우저의 현재 주소를 구하는 함수 */
export function getCoord() {
    navigator.geolocation.getCurrentPosition((position) => {
        const x = position.coords.latitude;
        const y = position.coords.longitude;
        const result = {x: x, y: y}

        return result;
    });
}

/** A좌표와 B좌표의 거리를 km로 나타내는 함수 */
export function getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2) {
    function deg2rad(deg) {
        return deg * (Math.PI/180)
    }

    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1); // deg2rad below
    var dLon = deg2rad(lng2-lng1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}
