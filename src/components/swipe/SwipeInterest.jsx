import React from "react";

import styled from "styled-components";

const SwipeInterest = (props) => {
  const { interest, interest_name } = props.curr_user;

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
  gap: 9px;

  font-weight: 700;

  .tag {
    padding: 5px 12px;
    border-radius: 20px;
    background-color: #d5678f;
    color: #fff;
  }
`