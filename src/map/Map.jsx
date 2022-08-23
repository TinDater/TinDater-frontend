import React, { useEffect } from "react";
import styled from "styled-components";
import KakaoMapScript, { address } from "./kakaoMapScript";

const Map = (props) => {
  const distance = "";
  const {x, y} = props;

  useEffect(() => {
    KakaoMapScript(x, y);

    // navigator.geolocation.getCurrentPosition((position) => {
    //   //현재 위치
    //   console.log(position.coords.latitude, position.coords.longitude);

    //   const x = position.coords.latitude;
    //   const y = position.coords.longitude;

    //   KakaoMapScript(x, y);
    //   address(x, y);
    // });

  }, []);
  
  return (
    <StMap>  

      <p className="map_info">
        상대와의 거리 : {distance}km
      </p>
      <div className="box_cover"></div>
      <div id="myMap"></div>

    </StMap>
  )
};

export default Map;

const StMap = styled.div`
  width: 100%;
  height: 80%;

  position: absolute;
  bottom: 0;

  #myMap {
    width: 100%;
    height: 100%;
  }

  .map_info {
    padding: 2px 10px;
    border-radius: 20px;
    display: inline-block;

    color: #fff;
    background-color: #222;

    font-weight: 700;
    font-size: 13px;

    position: absolute;
    bottom: -3px;
    left: 9px;

    z-index: 99999;
  }

  &::after {
    content: '';

    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    
    z-index: 999;
    background: linear-gradient(#eee, transparent 50%);
  }
`;
