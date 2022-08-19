import React from "react";
import { Navigate, useNavigate } from "react-router-dom"
import axios from 'axios';
import styled from "styled-components"

const instance = axios.create({   // 공식문서에서 axios 객체를 instance라고 부름
    timeout: 2000                 // axios는 기본적으로 요청을 보내면 응답이 오기전까지 대기한다, 그것에 대한 리미트 시간을 정해주는것
})
const NotFound = () => {
    const nav = useNavigate("")
    const gologin = () => Navigate("/login")  //swipe 로가야할지?, 로그인 페이지로 가야할지?
    setTimeout(2000)
    
    return (
        <div>
            <FullPage onClick={gologin}>
            <h1 style={{color: "white"}}>알수 없는 페이지 입니다.</h1>
            </FullPage>
        </div >
    );
}

export default NotFound;

const FullPage = styled.div`
    position: fixed;
    top:0; right: 0; bottom: 0; left: 0;
    background: linear-gradient(to top, #fc257e, #fcdf7e)
`