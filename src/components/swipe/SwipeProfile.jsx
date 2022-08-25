import React from "react";
import { useNavigate } from "react-router-dom";

import { MdNewReleases } from "react-icons/md";
import styled from "styled-components";
  
const SwipeProfile = (props) => {
  const navigate = useNavigate();
  const { userId, nickname, age, gender } = props.curr_user;
  return (
    <StProfile>
      <h2 className="name">{nickname}</h2>
      <h3 className="age">{age}</h3>
      <button
        className="info"
        onClick={()=>{
          navigate(`/userpage/${userId}`) 
        }}
      >
        <MdNewReleases />
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
    width: 30px;
    height: 20px;
    border-radius: 50%;
    
    background: transparent;
    color: #fff;
    border: none;

    font-size: 30px;
    text-align: center;
    font-weight: 700;
    
    position: relative;
    cursor: pointer;
    
    svg {
      position: absolute;
      left: 50%;
      top: -4px;
      transform: translateX(-50%);
    }
  }
`