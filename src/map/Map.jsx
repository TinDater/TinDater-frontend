import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { __updateCoord } from "../store/modules/loginSlice";
import KakaoMapScript from "./kakaoMapScript";

const Map = (props) => {
  const dispatch = useDispatch();
  const [distance, setDistance] = useState('');
  
  // 현재 상세페이지의 유저
  const user = props.curr_user; 
  const userCoord = {x: user.x, y: user.y}
  // 로그인한 유저
  const logginUser = useSelector(state => state.login.user);
  const logginUserCood = {x: logginUser.x, y: logginUser.y};
  // 현재 위치
  const [currentPlaceCoord, setCurrentPlaceCoord] = useState();
  // 출력할 위치
  let mapCoord = userCoord;  
  
  console.log(user);
  mapCoord = userCoord;  
  
  /** 사용자의 위치를 구하고, 서버에 업데이트 */
  useEffect(()=>{
    getUserCoord();
    
    
    if(currentPlaceCoord !== undefined && logginUserCood.x != currentPlaceCoord.x){
      console.log('사용자의 위치 수정됨');
      dispatch(__updateCoord({
        userId: logginUser.userId,
        ...currentPlaceCoord
      }))
      mapCoord = currentPlaceCoord;
    }
    
    KakaoMapScript(
      Number(mapCoord.x), 
      Number(mapCoord.y) 
    );
  }, [])

  /** 현재 주소를 구하는 함수 */
  const getUserCoord = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const x = position.coords.latitude;
      const y = position.coords.longitude;
      
      let result = {
        x: parseFloat(x.toFixed(3)), 
        y: parseFloat(y.toFixed(3))
      }
      setCurrentPlaceCoord(result);
    });
  }
  
  // 사용자간의 좌표 구하기(보류)
  // useEffect(()=>{
  //   // 유저 주소 값 업데이트
  //   let distance = getDistanceFromLatLonInKm(
  //     logginUser.x, 
  //     logginUser.y, 
  //     userCoord.x, 
  //     userCoord.y
  //   )
  //   setDistance(Math.round(distance))
  // },[])

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

    display: none;
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
