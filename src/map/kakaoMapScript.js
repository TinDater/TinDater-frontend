const { kakao } = window;

/** #myMap에 지도 그리는 함수 */
export default function KakaoMapScript(x, y) {

    const container = document.getElementById('myMap');

    const options = {
        center: new kakao.maps.LatLng(x, y),
        level: 7
    };
    
    const map = new kakao.maps.Map(container, options);

    let markerPosition = new kakao.maps.LatLng(
        x,
        y
    );

    var imageSrc = "../img/btn-like-pink.png"; 
    var imageSize = new kakao.maps.Size(150, 150); 
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    let marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage
    });
    
    // 마커를 지도 위에 표시
    marker.setMap(map);
}

