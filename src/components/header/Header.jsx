import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../cookie";
import { MdOutlineLogout } from 'react-icons/md'

// 모듈
import { logOutUser } from "../../store/modules/loginSlice";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { bucketUrl, logginUser } = props.props;
  const imageUrl = bucketUrl + logginUser.user.imageUrl;

  const logOut = () => {
    alert("로그아웃 되었습니다.");
    deleteCookie("token");
    dispatch(logOutUser());
    navigate("/");
  };

  return (
    <StHeader
      imageUrl={
        imageUrl !== "" || imageUrl !== "no-img-2.png"
          ? imageUrl
          : "img/no-img-2.png"
      }
    >
      <div 
        className="profile_picture"
        onClick={() => {
          navigate("/mypage");
        }}
      ></div>
      <div
        className="logo"
        onClick={() => {
          navigate("/swipe");
        }}
      >
        틴데이터
      </div>
      <LogoutBtn onClick={logOut}>
        <MdOutlineLogout />
        <span>
          로그아웃
        </span>
      </LogoutBtn>
    </StHeader>
  );
};

export default Header;

const LogoutBtn = styled.button`
  width: auto;
  height: 40px;
  border-radius: 10px;

  border: none;

  font-size: 1rem;
  font-weight: 800;
  
  background-color: rgba(0, 0, 0, 0);
  color: #f55c73;
  
  cursor: pointer;

  &:hover {
    color: #ff4e6a
  }
  
  svg {
    display: none;
  }

  @media screen and (max-width: 400px) {
    svg {
      display: block;
      font-size: 1.5em;
    }

    span {
      display: none;
    }
  }
`;

const StHeader = styled.div`
  width: 100%;
  height: 70px;
  line-height: 70px;

  padding: 6px 1em 0;
  box-sizing: border-box;

  background-color: #fff;

  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .profile_picture {
    width: 55px;
    height: 55px;
    border-radius: 50%;

    background: skyblue url("${(props) => props.imageUrl}") no-repeat center / cover;
    cursor: pointer;
  }

  .logo {
    width: 130px;
    height: calc(100% - 5px);
    background: url("img/logo-tindater-long.png") no-repeat center / contain;

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
