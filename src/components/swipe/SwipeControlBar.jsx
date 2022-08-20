import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { UserContext } from '../../pages/Swipe'
import {__likeUser, __dislikeUser, __matchUser} from '../../store/modules/swipeSlice'

const SwipeControlBar = () => {
  const dispatch = useDispatch();
  const { logginId, userId, likeMe } = useContext( UserContext );

  console.log(useContext( UserContext ));
  
  const likeButtonClickHandler = (userId) => {
    if(likeMe){
      const matchUser = dispatch(__matchUser({logginId, userId}));
      console.log("매치");
      console.log(matchUser);

      dispatch(__likeUser({logginId, userId}));
    } else {
      dispatch(__likeUser({logginId, userId}));
    }
  }

  const dislikeButtonClickHandler = (userId) => {
    dispatch(__dislikeUser({logginId, userId}));
  }

  return (
    <StControlBar>
      <StLikeButton
        className="button_like"
        buttonColor="#ff4e6a"
        onClick={()=>{
          likeButtonClickHandler(userId);
        }}
        >
        좋아요
      </StLikeButton>
      <StLikeButton
        className="button_dislike"
        buttonColor="#1fe9b9"
        onClick={()=>{
          dislikeButtonClickHandler(userId);
        }}
      >
        싫어요
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
  width: 70px;
  height: 70px;
  border-radius: 50%;

  border: 1px solid ${props => props.buttonColor};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  color: ${props => props.buttonColor};

  cursor: pointer;
`;
