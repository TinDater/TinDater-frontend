import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { __updateCoord } from "../store/modules/loginSlice";
import KakaoMapScript from "./kakaoMapScript";

const Map = (props) => {
  const dispatch = useDispatch();
  const { coord, userId } = props;
  const logginUser = useSelector(state => state.swipe.user)
  const coordLogginUser = {x: logginUser.x, y: logginUser.y}  
  
  dispatch(__updateCoord({
    userId: userId,
    ...coord
  }))

  let distance = getDistanceFromLatLonInKm(
    coordLogginUser.x, 
    coordLogginUser.y, 
    coord.x, 
    coord.y
  )
  distance = Math.round(distance);

  /** A좌표와 B좌표의 거리를 km로 나타내는 함수 */
  function getDistanceFromLatLonInKm(lat1,lng1,lat2,lng2) {
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
  
  useEffect(() => {
    
    if(coord.x !== null){
      KakaoMapScript(coord.x, coord.y);
    }

  }, []);
  
  return (
    <StMap>  

      <p className="map_info">
        상대와의 거리 : 약 {distance}km
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
    background: linear-gradient(#eee, transparent 70%);
  }
`;
