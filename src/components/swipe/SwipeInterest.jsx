import React from "react";
import styled from "styled-components";

const SwipeInterest = () => {
  return (
    <StInterest>
      <div className="tag">
        취미
      </div>
      <div className="tag">
        관심사
      </div>
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