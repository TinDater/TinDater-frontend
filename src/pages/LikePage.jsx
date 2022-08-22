import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const LikePage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate("/") //임시로 경로 선언
  // // const 수정페이지 = () => navigate("수정페이지경로")

  // const likesList = useSelector((state) => state.likesList.likesList);
  // console.log(likesList)

  const userId = "a"  //임시로 선언
  const loginId = "a" //임시로 선언

  const [likes, setLikes] = useState({
    likeId: "",
    userId: "",
    likeUserId: "",
  })    
  const fetchLikes = async () => {
    try { 
      const data = await axios.get("http://localhost:3001/likes");
      setLikes(data)
    } catch(err) {
      alert('비어 있습니다.')
    }
    };
      
  useEffect(() => {
    fetchLikes();
  }, []);


  return (
    <Layout>

      <h1>좋아요 페이지</h1>

      {/* 이미지리스트 가겨오기 */}
      <img onClick={goBack}>리스트, 클릭한 유저 페이지로 이동</img> 

      {userId === loginId ? <button onClick={goBack}>수정</button> : null}              {/*{userId === loginId && <button>수정</button>} */}

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

