import React from "react";

import styled from "styled-components";
import SwipeControlBar from "../components/swipe/SwipeControlBar";
import SwipeInterest from "../components/swipe/SwipeInterest";
import SwipeProfile from "../components/swipe/SwipeProfile";

const Swipe = () => {
  return (
    <StSwipeSection>

      <SwipeProfile />
      <SwipeInterest />
      <SwipeControlBar />
      
    </StSwipeSection>
  );
};

export default Swipe;

const StSwipeSection = styled.div`
  height: calc(100vh - 100px);
  padding: 0 1em;
  box-sizing: border-box;

  border-radius: 10px;
  background-color: #eee;

  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`
