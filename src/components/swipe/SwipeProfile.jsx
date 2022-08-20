import React from "react";
import styled from "styled-components";

const SwipeProfile = () => {
  return (
    <StProfile>
      <div className="title">
        <h2>이름</h2>
        <h3>00</h3>
        <button>i</button>
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