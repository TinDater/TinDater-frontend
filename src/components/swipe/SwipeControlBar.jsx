import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { UserContext } from '../../pages/Swipe'
import {__likeUser, __dislikeUser, __matchUser} from '../../store/modules/swipeSlice'

const SwipeControlBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { logginId, userId, likeMe } = useContext( UserContext );

  const likeButtonClickHandler = (logginId, otherUserId) => {
    if(likeMe){
      console.log("매치");
      
      dispatch(__matchUser({logginId, otherUserId}));
      navigate("/swipe/match")
    } else {
      dispatch(__likeUser({logginId, otherUserId}));
    }
  }

  const dislikeButtonClickHandler = (logginId, otherUserId) => {
    dispatch(__dislikeUser({logginId, otherUserId}));
  }

  return (
    <StControlBar>
      <StLikeButton
        buttonImg="img/btn-dislike.png"
        onClick={()=>{
          dislikeButtonClickHandler(logginId, userId);
        }}
        >
        싫어요
      </StLikeButton>
      <StLikeButton
        buttonImg="img/btn-like.png"
        onClick={()=>{
          likeButtonClickHandler(logginId, userId);
        }}
      >
        좋아요
      </StLikeButton>
    </StControlBar>
  );
};

export default SwipeControlBar;

const StControlBar = styled.div`
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const StLikeButton = styled.button`
  all: unset;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  text-indent: -9999px;

  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);

  background: url("${props => props.buttonImg}") no-repeat center / contain;

  cursor: pointer;
`;
