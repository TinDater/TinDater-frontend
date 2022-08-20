import React, { useEffect, createContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import {__getUser} from '../store/modules/swipeSlice'

import styled from "styled-components";
import SwipeControlBar from "../components/swipe/SwipeControlBar";
import SwipeInterest from "../components/swipe/SwipeInterest";
import SwipeProfile from "../components/swipe/SwipeProfile";

export const UserContext = createContext();

const Swipe = () => {
  const dispatch = useDispatch();
  
  const curr_user = useSelector(state => state.swipe.user)
  useEffect(()=>{
    dispatch(__getUser(userId))
  }, [])
  
  //임시
  const userId = 1;
  const logginId = 0;

  return (
    
    <UserContext.Provider value={
      {logginId: logginId, ...curr_user}
    }>

      <StSwipeSection>
        <SwipeProfile />
        <SwipeInterest />
        <SwipeControlBar />
      </StSwipeSection>

    </UserContext.Provider>
  );
};

export default Swipe;

const StSwipeSection = styled.div`
  height: calc(100vh - 100px);
  padding: 0 1em;
  box-sizing: border-box;

  border-radius: 10px;
  background-color: skyblue;

  display: flex;
  flex-flow: column;
  justify-content: flex-end;
`
