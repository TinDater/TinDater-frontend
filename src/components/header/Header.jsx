import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <div className="profile_picture"></div>
      <div className="logo">틴데이팅</div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  width: 100%;
  height: 70px;
  line-height: 70px;

  padding: 5px 1em 0;
  box-sizing: border-box;
  
  background-color: #fff;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .profile_picture {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #ddd;
  }

  .logo {
    width: 160px;
    padding-bottom: 30%;
    background: url('img/logo-tindating-long.png') no-repeat center / contain ;
    
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    text-indent: -9999px;
  }

  @media (max-width: 400px) {
    .logo {
      position: static;
      left: 0;
      transform: none;
      background-position: right;
    }
  }
`;
