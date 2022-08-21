import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { UserContext } from '../../pages/Swipe'
  
const SwipeProfile = () => {
  const navigate = useNavigate();
  const { userId, nickname, age, gender } = useContext( UserContext );
  return (
    <StProfile>
      <h2 className="name">{nickname}</h2>
      <h3 className="age">{age}</h3>
      <button
        className="info"
        onClick={()=>{
          navigate(`/mypage/${userId}`) 
        }}
      >
        i
      </button>
      <h3 className="gender">{gender?'♀':'♂'}</h3>
    </StProfile>
  );
};

export default SwipeProfile;

const StProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  color: #fff;

  .name {
    font-size: 2em;
  }
  
  .age {
    font-size: 1.8em;
    font-weight: 500;
  }

  .gender {
    width: 20px;
    height: 20px;
    line-height: 19px;
    border-radius: 50%;
    
    background: #393836;

    font-size: 12px;
    text-align: center;
    font-weight: 700;
  }

  .info {
    width: 20px;
    height: 20px;
    line-height: 19px;
    border-radius: 50%;
    
    background: #fff;
    border: none;

    font-size: 12px;
    text-align: center;
    font-weight: 700;
  }
`