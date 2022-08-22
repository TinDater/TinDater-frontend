import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const LikePage = () => {
  const [likesPost, setLikesPost] = useState([])
  // const [userId, setUserId] = useState([])  
  // const [loginId, setLoginId] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBack = () => navigate("/") //임시로 경로 선언
  //const 수정페이지 = () => navigate("/수정페이지경로")

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

  const userId = "a";
  const loginId = "a";

  return (
    <>
        <h1>좋아요 페이지</h1>
    <Layout>

      <div>
        {likesPost.map((list) => {
          return (
            <List>
              <div key={list.userId}>
                <img onClick={goBack} src={list.imageUrl} />    {/* <img onClick={goBack}>리스트, 클릭한 유저 페이지로 이동</img> */}
              </div>
              <div key={list.userId}>
                <h4>{list.nickname}{list.age}</h4>
                <h3>{list.gender?"여자":"남자"}</h3>
              </div>
            </List>
          )
        })}
      </div>
    </Layout>
      {userId === loginId ? <button onClick={goBack}>수정</button> : null}        {/*{userId === loginId && <button>수정</button>} */}
        </>
  )
};
export default LikePage;

const Layout = styled.div`
    display: flex; 
    justify-content: center; 
    align-items: center;
    min-width: 800px; max-width: 1200px;
    margin: 0 auto;
`
const List = styled.div`
     
    justify-content: center; 
    align-items: center;
    min-width: 400px; max-width: 600px;
    margin: 0 auto;
`

