import React, { useContext } from "react";

import styled from "styled-components";
import { UserContext } from '../../pages/Swipe'

const SwipeInterest = () => {
  const { interest, interest_name } = useContext( UserContext );

  return (
    <StInterest>
      { interest.map( (inte, i) => {
        return ( 
          Number(inte) ?
          <div className="tag" key={i}>
            {interest_name[i]}
          </div> 
          :""
        )
      }) }
    </StInterest>
  );
};

export default SwipeInterest;

const StInterest = styled.div`
  margin-bottom: 25px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .tag {
    padding: 5px 12px;
    border-radius: 20px;
    background-color: #393836;
    color: #fff;
  }

`