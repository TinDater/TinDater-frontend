import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __clearUserInfo, __getUser } from "../store/modules/swipeSlice";
import { __myInfo } from "../store/modules/loginSlice";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../cookie";

import styled from "styled-components";
import SwipeControlBar from "../components/swipe/SwipeControlBar";
import SwipeInterest from "../components/swipe/SwipeInterest";
import SwipeProfile from "../components/swipe/SwipeProfile";

const Swipe = (props) => {
  const dispatch = useDispatch();
  const { logginUser, bucketUrl } = props.props;
  const curr_user = useSelector((state) => state.swipe.user);

  const logginId = logginUser.user.userId;
  const imageUrl = bucketUrl + curr_user.imageUrl;

  useEffect(() => {
    dispatch(__clearUserInfo());
    dispatch(__getUser(logginId));
  }, []);

  return (
    <StSwipeSection
      imageUrl={
        curr_user.imageUrl !== "img/no-img-2.png"
          ? imageUrl
          : "img/no-img-2.png"
      }
    >
    {curr_user.userId && (
      <aside>
          <Fragment>
            <SwipeProfile curr_user={curr_user} logginId={logginId} />
            <SwipeInterest curr_user={curr_user} logginId={logginId} />
            <SwipeControlBar curr_user={curr_user} logginId={logginId} />
          </Fragment>
      </aside>
    )}
    </StSwipeSection>
  );
};

export default Swipe;

const StSwipeSection = styled.div`
  height: 100%;
  background: #ffe4e9 url("${(props) => props.imageUrl}") no-repeat center /
    cover;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);

  display: flex;
  flex-flow: column;
  justify-content: flex-end;

  aside {
    padding: 20px 2em;
    box-sizing: border-box;
    background-image: linear-gradient(transparent 5%, rgba(0, 0, 0, 0.8) 80%);

    @media (max-width: 400px) {
      padding: 12px 1.5em;
    }
  }
`;
