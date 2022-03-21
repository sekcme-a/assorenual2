import React, { useEffect } from 'react'
import style from "styles/info/location.module.css"

const Map =(props)=>{

  useEffect(() => {
    const x = props.locX;
    const y = props.locY;
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(x, y),
      level: 4
    };

    let map = new kakao.maps.Map(container, options);
    let markerPosition  = new kakao.maps.LatLng(x, y); 
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
    var iwContent = `<div style="width: 145px; padding:2px 5px; text-align: center; font-weight: bold; font-size: 12px; line-height: 14px">(사)대한생활체육회<br/><a href=https://map.kakao.com/link/map/대한생활체육회,${x},${y} style="color:blue" target="_blank">큰지도보기</a> / <a href="https://map.kakao.com/link/to/대한생활체육회,${x},${y}" style="color:blue" target="_blank">길찾기</a></div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    var  iwPosition = new kakao.maps.LatLng(x, y); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker); 

  }, [])
      
    return (
      <div id="map" className={style.locationMap}></div>
    )
}

export default Map;