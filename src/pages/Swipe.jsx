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

        <aside>
          <SwipeProfile />
          <SwipeInterest />
          <SwipeControlBar />
        </aside>
      </StSwipeSection>

    </UserContext.Provider>
  );
};

export default Swipe;

const StSwipeSection = styled.div`
  height: 100%;
  background-color: skyblue;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-flow: column;
  justify-content: flex-end;

  aside {
    padding: 12px 2em;
    box-sizing: border-box;
    background-image: linear-gradient(transparent 5%, rgba(0, 0, 0, 0.9) 80%);
    
    @media (max-width: 400px) {
      padding: 12px 1.5em;
    }
  }
  
`
