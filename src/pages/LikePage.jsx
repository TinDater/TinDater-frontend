import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const LikePage = () => {
  const [likesPost, setLikesPost] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {

    const fetchLikes = async () => {
      try {
        const data = await axios.get("http://localhost:3001/likes");
        setLikesPost(data.data)
      } catch (err) {
        alert('비어 있습니다.')
      }
    };
    fetchLikes()
  }, []);

  const navigate = useNavigate();
  const goBack = () => navigate("/") //임시로 경로 선언
  // // const 수정페이지 = () => navigate("수정페이지경로")
  const userId = "a"  //임시로 선언
  const loginId = "a" //임시로 선언

  return (
    <Layout>

      <h1>좋아요 페이지</h1>

      <div>
        {likesPost.map((list) => {
          return (
            <div key={list.userId}>
              <img onClick={goBack} src={list.imageUrl} />    {/* <img onClick={goBack}>리스트, 클릭한 유저 페이지로 이동</img> */}
            </div>
          )
        })}
      </div>

      {userId === loginId ? <button onClick={goBack}>수정</button> : null}        {/*{userId === loginId && <button>수정</button>} */}

    </Layout>
  )
};
export default LikePage;

const Layout = styled.div`
    display: flex; justify-content: center; align-items: center;
    min-width: 800px; max-width: 1200px;
    margin: 0 auto;
`
const List = styled.div`
    
    background-color: #black
`

