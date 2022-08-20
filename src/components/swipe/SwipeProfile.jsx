import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { UserContext } from '../../pages/Swipe'

const SwipeProfile = () => {
  const navigate = useNavigate();
  const { userId, nickname, age, gender } = useContext( UserContext );
  return (
    <StProfile>
      <div className="title">
        <h2>{nickname}</h2>
        <h3>{age}</h3>
        <button
          onClick={()=>{
            navigate(`/mypage/${userId}`) 
          }}
        >
          i
        </button>
        <h3>{gender?'♀':'♂'}</h3>
      </div>
    </StProfile>
  );
};

export default SwipeProfile;

const StProfile = styled.div`
  background-color: #ddd;
  
  .title {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`