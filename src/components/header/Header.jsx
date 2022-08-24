import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { setCookie, getCookie, deleteCookie } from "../../cookie";

// 모듈
import { logOutUser, __checkToken } from "../../store/modules/loginSlice";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const is_token = getCookie("token") ? true : false;
  const { bucketUrl, logginUser } = props.props;
  const imageUrl = bucketUrl + logginUser.user.imageUrl;

  console.log(imageUrl);
  console.log(is_token);

  const logOut = () => {
    alert("정상 로그아웃 되었습니다.");
    deleteCookie("token");
    dispatch(logOutUser());
    navigate("/");
  };

  React.useEffect(() => {
    console.log(is_token);
    if (is_token) {
      dispatch(__checkToken());
    }
  }, [is_token]);

  return (
    <StHeader
      imageUrl={
        imageUrl !== "" || imageUrl !== "no-img-2.png"
          ? imageUrl
          : "img/no-img-2.png"
      }
    >
      <div className="profile_picture"></div>
      <div
        className="logo"
        onClick={() => {
          navigate("/swipe");
        }}
      >
        틴데이팅
      </div>
      <LogoutBtn onClick={logOut}>로그아웃</LogoutBtn>
    </StHeader>
  );
};

export default Header;

const LogoutBtn = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  border: 1px solid blue;
  :hover {
    border: 3px solid red;
  }
`;

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

    background: skyblue url("${(props) => props.imageUrl}") no-repeat center /
      cover;
  }

  .logo {
    width: 130px;
    height: calc(100% - 5px);
    background: url("img/logo-tindater-long.png") no-repeat center / contain;

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
