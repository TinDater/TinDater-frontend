import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getLikesThunk } from "../store/modules/likesListSlice";

import { MdNewReleases } from "react-icons/md";
import styled from "styled-components";
import axios from "axios";
import LikePageNav from "../components/likePage/LikePageNav";

const LikePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [likesPost, setLikesPost] = useState([]);
  // const [userId, setUserId] = useState([])
  // const [loginId, setLoginId] = useState([])
  const goBack = () => navigate("/"); //임시로 경로 선언
  //const 수정페이지 = () => navigate("/수정페이지경로")

  const likes = useSelector((state) => state.likesList.likes);
  const logginId = useSelector((state) => state.login.user.userId);

  const bucketUrl = process.env.REACT_APP_S3_IMAGE_URL;

  useEffect(() => {
    // const fetchLikes = async () => {
    //   try {
    //     const data = await axios.get("http://localhost:3001/likes");
    //     setLikesPost(data.data)
    //   } catch (err) {
    //     alert('비어 있습니다.')
    //   }
    // };
    // fetchLikes()
    console.log(logginId);

    dispatch(__getLikesThunk(logginId));
  }, []);

  let likesArray = [];

  for (const x in likes) {
    likesArray.push(likes[x]);
  }

  return (
    <StLikPage>
      <LikePageNav title={"내가 좋아요한 사람"} />
      <StLayout>
        {!likesArray.length && <h1>내가 좋아요한 사람이 없습니다.</h1>}

        {likesArray.map((list) => {
          const { userId, email, nickname, age, gender, address, imageUrl, likeMe } = list;
          return (
            <StList
              className={likeMe?"special":""}
              key={userId}
              onClick={() => {
                navigate(`/userpage/${userId}`);
              }}
              imageUrl={
                imageUrl !== "" ? bucketUrl + imageUrl : "img/no-img-2.png"
              }
            >
              <h2 className="name">{nickname}</h2>

              <div className="info_box">
                <h3 className="age">{age}</h3>
                <h3 className="gender">{gender ? "♀" : "♂"}</h3>
              </div>

              <span className="match_text">Match!</span>

              <button
                className="info"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/userpage/${userId}`);
                }}
              >
                <MdNewReleases />
              </button>
            </StList>
          );
        })}
      </StLayout>
    </StLikPage>
  );
};
export default LikePage;

const StLikPage = styled.div`
  width: 100%;
  height: calc(100vh - 150px);

  position: absolute;
  top: 0;
  left: 0;

  text-align: center;
`;

const StLayout = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  padding: 2px 22px;
  box-sizing: border-box;

  background-color: #fff;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;

  gap: 24px;
  overflow-y: scroll;

  & {
    scrollbar-width: thin;
    scrollbar-color: #ffffff;
  }
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 0px solid #ffffff;
  }

  & > div {
    flex: 0 0 calc(33% - (8px * 2));
  }

  @media (max-width: 500px) {
    & > div {
      flex: 0 0 calc(50% - 12px);
      gap: 10px;
    }
  }

  @media (max-width: 380px) {
    & > div {
      flex: 0 0 100%;
      gap: 0px;
    }
  }

  h1 {
    margin-top: 45%;
    color: #aaa;
    flex: 1 1 100%;
    text-align: center;
  }
`;

const StList = styled.div`
  height: 30vh;
  border-radius: 18px;

  padding: 20px 10px;
  box-sizing: border-box;

  background: linear-gradient(
      rgba(0, 0, 0, 0.6) 20%,
      transparent 50%,
      rgba(0, 0, 0, 0.1)
    ),
    url("${(props) => props.imageUrl}") no-repeat center / cover;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  color: #fff;

  text-align: center;

  display: flex;
  flex-flow: column;

  position: relative;

  .match_text {
    display: none;
  }

  &.special {
      color: #24fff0;
    
    .match_text {
      font-size: 40px;
      font-weight: 800;

      display: block;
    }

    & svg {
      color: #24fff0;
    }
  }

  .info_box {
    text-align: right;

    display: flex;
    justify-content: center;
    gap: 7px;

    box-sizing: border-box;

    .gender {
      color: #fff;
    }
  }

  .name {
    font-size: 1.4em;
    margin: 0;
  }

  .age {
    font-size: 1.8em;
    font-weight: 500;
    margin: 0;
  }

  .gender {
    width: 20px;
    height: 20px;
    line-height: 19px;
    border-radius: 50%;

    background: #393836;

    font-size: 12px;
    text-align: center;
    font-weight: 700;
  }

  .info {
    width: 50px;
    line-height: 30px;

    text-align: center;

    margin-left: auto;
    margin-right: 10px;

    background: transparent;
    color: #fff;
    border: none;

    font-size: 50px;
    text-align: center;
    font-weight: 700;

    cursor: pointer;

    position: absolute;
    right: 8px;
    bottom: 10px;
  }
`;
