import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// 리듀서 모듈
import { __login } from "../../store/modules/loginSlice";
// 로그인 form 컴포넌트
function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formstate, setFormState] = useState(false);
  const [loginData, setloginData] = useState({ email: "", password: "" });

  // input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setloginData({ ...loginData, [id]: value });
  };

  // submit 이벤트
  const submitLogin = async (e) => {
    // 새로고침 막기
    e.preventDefault();
    // 리듀서로부터 상태 받아오기
    const loginState = await dispatch(__login(loginData));
    // console.log(loginState);
    if (loginState.type === "log/LOGIN_LOG/rejected") {
      alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
    // 로그인시 환영 인사 후 페이지 이동
    if (loginState.type === "log/LOGIN_LOG/fulfilled") {
      // console.log("성공점");
      alert(`${loginState.payload.nickname} 님 환영합니다 :) `);
      navigate("/swipe");
    }
  };

  React.useEffect(() => {
    // 로그인 버튼 잠금
    if (loginData.email !== "" && loginData.password !== "") {
      setFormState(true);
    } else {
      console.log(process.env.REACT_APP_S3_AWS_BUCKET);
      setFormState(false);
    }
  }, [loginData]);

  // 로그인 버튼이 빈칸일 경우 disabled하게 스타일 설정
  const buttonStyle = {
    backgroundColor: formstate
      ? "linear-gradient(-60deg, #fe7853, #ff207d)"
      : "grey",
    color: formstate ? "#222" : "#fff",
    disabled: !formstate,
  };

  return (
    <Fragment>
      {/* form은 button의 type과 연결되어 button이 눌러지면 
      submitLogin을 실행합니다. */}
      <form onSubmit={submitLogin}>
        <input
          id="email"
          type="email"
          placeholder="이메일 입력"
          required
          // onChange를 통해 값이 바뀔때마다
          // loginData에 값을 수정하여 저장합니다.
          onChange={changeInput}
        />
        <input
          id="password"
          type="password"
          placeholder="비밀번호 입력"
          required
          onChange={changeInput}
        />
        <StButton type="submit" style={buttonStyle}>
          로그인
        </StButton>
      </form>
      {/* 회원가입 버튼을 누르면 sign라우트로 이동하게 설정 */}
      <button
        onClick={() => {
          navigate("/sign");
        }}
      >
        회원가입
      </button>
    </Fragment>
  );
}

const StButton = styled.button`
  width: 500px;
  height: 500px;
`;
export default LoginForm;
