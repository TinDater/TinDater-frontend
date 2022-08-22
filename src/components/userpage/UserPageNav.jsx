import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const UserPageBody = (props) => {
  const navigate = useNavigate();

  return (
    <StUserPageNav>
      <MdOutlineKeyboardArrowLeft
        onClick={()=>{
          navigate(`/swipe`) 
        }}
      />
      {props.title}

    </StUserPageNav>
  )
};

export default UserPageBody;

const StUserPageNav = styled.div`
  width: 100%;
  height: 70px;
  line-height: 68px;

  background-color: #fff;
  font-size: 1.2em;
  font-weight: 700;
  
  position: relative;
  
  svg {
    font-size: 2.2em;
    position: absolute;
    top: 12px;
    left: 20px;
    color: #ccc;
    
    cursor: pointer;
  }
`