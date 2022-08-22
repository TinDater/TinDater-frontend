import React, { Fragment } from "react";
import styled from "styled-components";
import { MdLocalFireDepartment, MdFavorite,MdOutlineChatBubble, MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <StFooter>
      <ul className="footer_menu">
        <li onClick={()=>{
          navigate('/swipe')
        }}>
          <div className="icon_box">
            <MdLocalFireDepartment />
          </div>
        </li>
        <li onClick={()=>{
          navigate('/like')
        }}>
          <div className="icon_box">
            <MdFavorite />
          </div>
        </li>
        <li onClick={()=>{
          navigate('/mypage')
        }}>
          <div className="icon_box">
            <MdAccountCircle />
          </div>
        </li>
        <li className="no_link">
          <div className="icon_box">
            <MdOutlineChatBubble />
          </div>
        </li>
      </ul>
    </StFooter>
  )
};

export default Footer;

const StFooter = styled.div`
  height: 80px;
  
  background-color: #fff;

  .no_link .icon_box {
    cursor: default !important;
    
    &:hover {
      color: #888 !important;
    }
  }

  .footer_menu {
    display: flex;
    justify-content: space-between;
    text-align: center;
    
    li {
      flex: 1 1 auto;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .icon_box {
      width: 70%;
      height: 75px;

      font-size: 2.3em;
      
      border-radius: 20px;
      color: #888;

      cursor: pointer;
      transition: all 0.2s;

      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        color: #ff4e6a
      }
    }
  }

  
`