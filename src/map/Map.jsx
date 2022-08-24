import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { __updateCoord } from "../store/modules/loginSlice";
import KakaoMapScript from "./kakaoMapScript";
import {getCoord, getDistanceFromLatLonInKm} from "./getCoord";

const Map = (props) => {
  const dispatch = useDispatch();

  const { coord, userId } = props;
  const [distance, setDistance] = useState('');
  
  // 로그인한 유저로 수정하기
  const logginUser = useSelector(state => state.swipe.user);

  useEffect(()=>{
    // 유저 주소 값 업데이트
    dispatch(__updateCoord({
      userId: logginUser.userId,
      ...getCoord()
    }))
  
    let distance = getDistanceFromLatLonInKm(
      logginUser.x, 
      logginUser.y, 
      coord.x, 
      coord.y
      )
      
    // 지우기
    console.log(
      logginUser.x, 
      logginUser.y, 
      coord.x, 
      coord.y
    );

    setDistance(Math.round(distance))
  },[])

  
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
