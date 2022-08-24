import React from "react";

import SignUpForm from "../components/login/SignUpForm";
import SignPageNav from "../components/login/SignPageNav";
import styled from "styled-components";

function SignUp() {
  return (
    <StSignForm>
      <SignPageNav />
      <SignUpForm />
    </StSignForm>
  )
}

export default SignUp;
  
const StSignForm = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;

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

  div, form {
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
    height: 50px;
    
    padding: 0 20px;
    box-sizing: border-box;
    
    font-size: 1.2em;
    font-weight: 700;
    word-break: keep-all;
    
    background-color: #fff;
    color: #222;
    
    cursor: pointer;
    transition: all .2s;
  }
  
  input, select {
    all: unset;
    margin: 0 auto;
    padding: 5px 0;
    
    font-size: 1.3em;
    padding-bottom: 0px !important;

    color: #222 !important;
    border-bottom: 3px solid #ccc;
  }
  
  button {
    border-radius: 65px;
    text-align: center;
    box-shadow: 0 3px 5px #c7c7c7;
  }
`
