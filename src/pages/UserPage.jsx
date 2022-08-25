import {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __userInfo } from "../store/modules/swipeSlice";

import styled from "styled-components";
import UserPageHeader from "../components/userpage/UserPageHeader";
import UserPageBody from "../components/userpage/UserPageBody";
import UserPageNav from "../components/userpage/UserPageNav";

const UserPage = () => {
  const dispatch = useDispatch();
  const {userId} = useParams('userId');
  const curr_user = useSelector((state) => state.swipe.user);
  const user_true = curr_user.userId == userId; 

  useEffect(() => {
    dispatch(__userInfo(userId));
  }, []);

  return (
    <>
      {user_true && 
        <StUserPage>
          <UserPageNav title={"프로필"} />
          <UserPageHeader curr_user={curr_user} />
          <UserPageBody curr_user={curr_user} />
        </StUserPage>
      }
    </>
  );
};

export default UserPage;

const StUserPage = styled.div`
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
