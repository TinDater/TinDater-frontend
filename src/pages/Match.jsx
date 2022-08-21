import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {__getUser} from '../store/modules/swipeSlice'

import styled from "styled-components";

const Match = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const curr_user = useSelector(state => state.swipe.user)
  useEffect(()=>{
    dispatch(__getUser(curr_user.userId))
  }, [])  

  const matchClickHandler = () => {
    navigate(`/userpage/${curr_user.userId}`)
  }

  return (
    <StMatch> 
      <div 
      className="text_contents"
      onClick={()=>{ matchClickHandler() }}
      >
        <h3>
          Match
        </h3>
        <p>
          매치 되었습니다!
        </p>
        <p className="match_name">
          {curr_user.nickname}님
        </p>
      </div>
    </StMatch>
  )
};

export default Match;

const StMatch = styled.div`
  height: 100%;
  border-radius: 10px;
  
  background-color: skyblue;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);

  overflow: hidden;
  cursor: pointer;

  .text_contents {
    width: 100%;
    height: 100%;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    color: aquamarine;
    
    background-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);
    
    h3 {
      font-size: 3em;
      font-weight: 800;
      margin: 0;
    }
    
    p {
      margin: 0;
    }
    
    .match_name {
      margin-top: 20px;
      
      font-size: 1.4em;
      font-weight: 800;
      color: #fff;
    }
  }

  animation: grow .2s forwards;

  @keyframes grow {
      0% {transform: scale(0.98)}
      100% {transform: scale(1)}
  }
`;
