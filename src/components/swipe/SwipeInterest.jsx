import React from "react";

import styled from "styled-components";

const SwipeInterest = (props) => {
  const { interest, interest_name } = props.curr_user;
  const interest_name2 = ["소셜 미디어", "영화", "커피", "헬스", "웹 개발", "스포츠", "해외축구", "미술관 관람", "산책", "음악감상"]

  return (
    <StInterest>
      { interest.map( (inte, i) => {
        return ( 
          Number(inte) ?
          <div className="tag" key={i}>
            {interest_name2[i]}
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