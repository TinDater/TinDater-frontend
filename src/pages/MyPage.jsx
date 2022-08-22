import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {__userMyInfo} from '../store/modules/swipeSlice'

import styled from "styled-components";
import UserPageHeader from "../components/userpage/UserPageHeader";
import UserPageBody from "../components/userpage/UserPageBody";
import UserPageNav from "../components/userpage/UserPageNav";

const MyPage = () => {
  const dispatch = useDispatch();
  
  const curr_user = useSelector(state => state.swipe.user)
  
  // 임시 내 아이디
  const userId = 1;
  
  useEffect(()=>{
    dispatch(__userMyInfo({userId}))
  }, [])  

  return (
    <StMyPage>
      
      <UserPageNav />

      <UserPageHeader curr_user={curr_user} />
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
