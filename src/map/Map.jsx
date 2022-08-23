import React, { useEffect } from "react";
import styled from "styled-components";
import KakaoMapScript, { address } from "./kakaoMapScript";

const Map = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      //현재 위치
      console.log(position.coords.latitude, position.coords.longitude);

      const x = position.coords.latitude;
      const y = position.coords.longitude;

      KakaoMapScript(x, y);
      address(x, y);
    });
  }, []);

  return <StMap id="myMap"></StMap>;
};

export default Map;

const StMap = styled.div`
  width: "100%";
  height: "100%";
`;
