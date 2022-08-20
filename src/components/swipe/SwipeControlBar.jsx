import React from "react";
import styled from "styled-components";

const SwipeControlBar = () => {
  return (
    <StControlBar>
      <StLikeButton>좋아요</StLikeButton>
      <StLikeButton>싫어요</StLikeButton>
    </StControlBar>
  );
};

export default SwipeControlBar;

const StControlBar = styled.div`
  text-align: center;
  background-color: #aaa;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const StLikeButton = styled.button`
  all: unset;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  border: 1px solid #222;
`;
