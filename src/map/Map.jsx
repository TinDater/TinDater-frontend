import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import { __updateCoord } from "../store/modules/loginSlice";
import KakaoMapScript from "./kakaoMapScript";

const Map = (props) => {
  const dispatch = useDispatch();
  const [distance, setDistance] = useState('');
  //리랜더
  const [update, setUpdate] = useState(false);
  
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
  
  /** 사용자의 위치를 구하고, 서버에 업데이트 */
  useEffect(()=>{
    getUserCoord();
    
    mapCoord = userCoord;  

    if(currentPlaceCoord !== undefined){
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

  }, [update])

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

      <button className="render_button" onClick={()=>{
        setUpdate(!update)
      }}>
        내 위치 불러오기
      </button>
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

  .render_button {
    all: unset;
    padding: 10px 20px;
    border-radius: 30px;
    margin-top: 10px;
    
    background-color: #fff;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.1);

    font-size: 12px;
    font-weight: 700;

    position: absolute;
    z-index: 9999;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    
    opacity: 0.6;
    transition: all 0.2;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
