import React from "react";
import styled from "styled-components";

const UserPageHeader = (props) => {
  const {nickname, address, age} = props.curr_user;

  return (
    <StUserPageHeader>
      <div className="profile_picture"></div>
      <p className="title">
        {nickname}, {age}
      </p>
      <p className="address">
        {address}
      </p>
    </StUserPageHeader>
  )
};

export default UserPageHeader;

const StUserPageHeader = styled.div`
  width: 100%;
  background-color: #fff;

  .profile_picture {
    width: 160px;
    height: 160px;
    border-radius: 50%;

    margin: 0 auto;
    margin-top: 30px;

    background-color: #ddd;
  }

  .title {
    margin: 12px 0 0;
    font-size: 1.5em;
    font-weight: 700;
  }
  
  .address {
    margin: 8px 0;
    font-size: 1.1em;
    font-weight: 500;
  }
`