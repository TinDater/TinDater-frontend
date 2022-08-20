import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { UserContext } from '../../pages/Swipe'

const SwipeInterest = () => {
  const navigate = useNavigate();
  const { interest } = useContext( UserContext );
  const list = ['일어 나기', '밥 먹기', '잠 자기', '달리기', '마라톤']

  return (
    <StInterest>
      { interest.map( (inte, i) => {
        return ( 
          inte ?
          <div className="tag" key={i}>
            {list[i]}
          </div> 
          :""
        )
      }) }
    </StInterest>
  );
};

export default SwipeInterest;

const StInterest = styled.div`
  background-color: #ddd;
  margin-bottom: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .tag {
    padding: 5px 12px;
    background-color: #888;
  }

`