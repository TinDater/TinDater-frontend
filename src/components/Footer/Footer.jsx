import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StFooter>
      <ul className="footer_menu">
        <li>
          <div className="icon_box">
            1
          </div>
        </li>
        <li>
          <div className="icon_box">
            2
          </div>
        </li>
        <li>
          <div className="icon_box">
            3
          </div>
        </li>
        <li>
          <div className="icon_box">
            4
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
      width: 60px;
      height: 60px;
      line-height: 60px;

      border-radius: 20px;
      background-color: #ddd;

      cursor: pointer;
    }
  }

  
`