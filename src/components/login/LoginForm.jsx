import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { __login } from "../../store/modules/loginSlice";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formstate, setFromState] = useState(false);
  const [loginData, setloginData] = useState({ email: "", password: "" });

  const changeInput = (e) => {
    const { value, id } = e.target;
    setloginData({ ...loginData, [id]: value });
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const loginState = await dispatch(__login(loginData));
    if (loginState.type === "log/LOGIN_LOG/rejected") {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    if (loginState.payload.result) {
      alert(`${loginState.payload.nickname} 님 환영합니다 :) `);
      navigate("/");
    }
  };

  React.useEffect(() => {
    if (loginData.email !== "" && loginData.password !== "") {
      setFromState(true);
    } else {
      setFromState(false);
    }
  }, [loginData]);

  const buttonStyle = {
    backgroundColor: formstate ? "blue" : "grey",
    color: formstate ? "white" : "black",
    disabled: !formstate,
  };

  return (
    <form onSubmit={submitLogin}>
      <input
        id="email"
        type="email"
        placeholder="이메일 입력"
        required
        onChange={changeInput}
      />
      <input
        id="password"
        type="password"
        placeholder="비밀번호 입력"
        required
        onChange={changeInput}
      />
      <button type="submit" style={buttonStyle}>
        로그인
      </button>
    </form>
  );
}
