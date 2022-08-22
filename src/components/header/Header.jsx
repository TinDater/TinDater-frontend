import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <StHeader>
      <div className="profile_picture"></div>
      <div 
        className="logo" 
        onClick={()=>{
          navigate('/')
      }}>
        틴데이팅
      </div>
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
    width: 130px;
    height: calc(100% - 5px);
    background: url('img/logo-tindater-long.png') no-repeat center / contain ;
    
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    text-indent: -9999px;
    cursor: pointer;
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
