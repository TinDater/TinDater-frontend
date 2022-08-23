import React from "react";
import styled from "styled-components";

const UserPageHeader = (props) => {
  const {nickname, address, age, imageUrl:currImagUrl} = props.curr_user;

  const bucketUrl = process.env.REACT_APP_S3_IMAGE_URL;
  const imageUrl = bucketUrl+currImagUrl;

  return (
    <StUserPageHeader
      imageUrl={imageUrl!=='' || imageUrl!=='no-img-2.png'?imageUrl:"img/no-img-2.png"}
    >
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
    width: 200px;
    height: 200px;
    border-radius: 50%;

    margin: 0 auto;
    margin-top: 20px;

    background: #fce3f1 url('${props => props.imageUrl}') no-repeat center / cover;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }

  .title {
    margin: 12px 0 0;
    font-size: 1.5em;
    font-weight: 700;
  }
  
  .address {
    margin: 8px 0 22px;
    font-size: 1.1em;
    font-weight: 500;
  }
`