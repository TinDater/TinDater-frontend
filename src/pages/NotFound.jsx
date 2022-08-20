import React from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const NotFound = () => {
    const navigate = useNavigate("")
    const goBack = () => navigate("/")
    setTimeout(goBack,2000)
    
    return (
        <div>
            <FullPage onClick={goBack}>
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