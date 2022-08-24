export default function get() {
    navigator.geolocation.getCurrentPosition((position) => {
        const x = position.coords.latitude;
        const y = position.coords.longitude;
        const result = {x: x, y: y}

        return result;
    });
}
