import React from "react";
import styled from "styled-components";

//컴포넌트
import LoginForm from "../components/login/LoginForm";

// 로그인 컴포넌트
function Login() {
  return (
    <StLoginForm>
      <div className="logo"></div>
      <LoginForm />
    </StLoginForm>
  )
}

export default Login;

const StLoginForm = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to left bottom, #fe7853, #fe3875);

  padding: 0 26px;
  box-sizing: border-box;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  gap: 16px;
  
  position: absolute;
  top: 0;
  left: 0;

  .logo {
    width: 90%;
    max-width: 280px;
    height: 60px;

    margin-bottom: 180px;
    background: url('img/logo-tindater-w.png') no-repeat center / contain;
  }
  
  form {
    width: 100%;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    gap: 16px;
  }

  button, input {
    all: unset;
    width: 100%;
    max-width: 400px;
    height: 60px;
    border-radius: 65px;
    
    padding: 0 20px;
    box-sizing: border-box;

    font-size: 1.2em !important;
    font-weight: 700;
    text-align: center;
    word-break: keep-all;

    background-color: #fff;
    color: #222;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    cursor: pointer;
    transition: all .2s;

    &:hover {
      background: #f1d6d6;
    }
  }
`
