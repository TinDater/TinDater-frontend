import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";import { useNavigate } from "react-router-dom";

import {__userMyInfo} from '../store/modules/swipeSlice'

import styled from "styled-components";
import UserPageHeader from "../components/userpage/UserPageHeader";
import UserPageBody from "../components/userpage/UserPageBody";
import UserPageNav from "../components/userpage/UserPageNav";

const MyPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const curr_user = useSelector(state => state.swipe.user)
  
  // 임시 내 아이디
  const userId = 2;
  
  useEffect(()=>{
    dispatch(__userMyInfo(userId))
  }, [])  

  return (
    <StMyPage>
      
      <UserPageNav title={"나의 프로필"} />

      <UserPageHeader curr_user={curr_user} />
      <div 
        className="button_go_profile"
        onClick={()=>{
          navigate('/profile')
        }}
      >
        내 정보 수정하기
      </div>
      <UserPageBody curr_user={curr_user} />
      

    </StMyPage>
  )
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
  `;
