import { useState } from "react";
import styled from "styled-components";

const UserPageBody = (props) => {
  const [userLoggin, setUserLoggin] = useState(false);

  return (
    <StUserPageNav>
      <span className="icon">‹</span>
      {userLoggin? '프로필' : '내 정보'}

      
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
  
  .icon {
    position: absolute;
    left: 20px;
  }
`