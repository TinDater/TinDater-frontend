import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __userMyInfo } from "../store/modules/loginSlice";
import { MdSettings } from "react-icons/md";

import styled from "styled-components";
import UserPageHeader from "../components/userpage/UserPageHeader";
import UserPageBody from "../components/userpage/UserPageBody";
import UserPageNav from "../components/userpage/UserPageNav";
import Map from "../map/Map";

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logginId = useSelector((state) => state.login.user.userId);
  const curr_user = useSelector((state) => state.login.user);

  useEffect(() => {
    console.log("test");
    dispatch(__userMyInfo(logginId));
  }, []);

  return (
    <StMyPage>
      <UserPageNav title={"나의 프로필"} />
      <UserPageHeader curr_user={curr_user} />

      <div className="mypage_body">
        
        <div className="button_box"
          onClick={()=>{
            navigate('/profile')
          }}
        >
          <div className="button_go_profile">
            <MdSettings />
            내 정보 수정
          </div>
        </div>
        
        <UserPageBody curr_user={curr_user} />

      </div>

      <UserPageBody curr_user={curr_user} />
    </StMyPage>
  );
};

export default MyPage;

const StMyPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;

  display: flex;
  flex-flow: column;
  align-items: center;

  text-align: center;

  position: absolute;
  top: 0;
  left: 0;

  .map_info {
    display: none !important;
    top: auto;
  }

  .mypage_body {
    width: 100%;
    height: 100%;
    
    position: relative;

    .button_box {
      width: 80%;
      margin: 0 auto;
      position: relative;
  
      transform: translateY(60px);
      z-index: 9999;
      
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover .button_go_profile {
        opacity: 0.9;
      }
  
      .button_go_profile {
        color: #222;
  
        font-size: 10px;
  
        display: flex;
        align-items: center;
        flex-flow: column;
      
        position: absolute;
        top: -20px;
        right: 0px;
        transform: translateY(-100%);
  
        svg {
          width: 50px;
          height: 50px;
          border-radius: 50%;
  
          padding: 10px;
          box-sizing: border-box;
          margin-bottom: 4px;
  
          background: #ccc;
          color: #555;
          box-shadow: 0 2px 5px #c7c7c7;
  
          font-size: 30px;
        }
      }
    }
  }
`;
