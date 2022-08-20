import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  changeCheckName,
  changeCheckNick,
  __checkNickname,
  __checkUsername,
  __signup,
} from "../../store/modules/signupSlice";

//회원가입 form 컴포넌트
export default function SignUpForm() {
  // 이름 중복확인 상태 값 가져오기 기본 값 false
  const checkName = useSelector((state) => state.signup.checkName);
  // 닉네임 중복확인 상태 값 가져오기 기본 값 false
  const checkNick = useSelector((state) => state.signup.checkNick);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 버튼 활성화 상태
  const [formstate, setFromState] = useState(false);
  // 보낼 데이터 상태관리
  const [signData, setSignData] = useState({
    email: "",
    password: "",
    confirm: "",
    nickname: "",
    age: "",
    address: "",
    gender: "",
    interests: {
      sports: 0,
      movie: 0,
      food: 0,
      pet: 0,
      music: 0,
    },
    imageUrl: "",
  });
  const [signNumber, setSignNumber] = useState(0);

  // 이메일, 닉네임, 비밀번호 조건 통과 상태
  const email = checkName;
  const nick = checkNick;
  const [pw, setPw] = useState(false);

  //input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setSignData({ ...signData, [id]: value });
    console.log(signData);
    // 중복 확인 후 데이터 변경시 상태 false로 변환하는 action 실행
    if (id === "email") dispatch(changeCheckName());
    if (id === "nickname") dispatch(changeCheckNick());
  };

  // 회원가입 이벤트
  const submitLogin = async (e) => {
    e.preventDefault();
    // 회원가입 성공시 로그인 페이지 이동
    const checkState = await dispatch(__signup(signData));
    if (checkState.payload) {
      navigate("/swipe");
    }
  };

  // const next = (e) => {
  //   e.preventDefault();
  //   setSignNumber((p) => {
  //     signNumber
  //   });
  // };

  // 중복확인 이벤트
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const CheckId = () => {
    // 이메일 형식 간이 체크 후 중복체크
    if (!regEmail.test(signData.email)) {
      alert("이메일 형식으로 작성해주세요");
    } else {
      dispatch(__checkUsername(signData.email));
    }
    setSignNumber(1);
  };
  const CheckNick = () => {
    dispatch(__checkNickname(signData.nickname));
    setSignNumber(2);
  };

  React.useEffect(() => {
    // 비밀번호 일치 조건 확인
    if (signData.confirm === signData.password && signData.password !== "") {
      setPw(true);
    } else {
      setPw(false);
    }
  }, [signData]);

  React.useEffect(() => {
    // 3개 조건 확인 후 버튼 활성화
    if (email && nick && pw) {
      setFromState(true);
    } else {
      setFromState(false);
    }
  }, [email, nick, pw]);

  const buttonStyle = {
    backgroundColor: formstate ? "blue" : "grey",
    color: formstate ? "white" : "black",
    disabled: !formstate,
  };

  return (
    <form onSubmit={submitLogin}>
      {signNumber === 0 && (
        <div>
          <div>
            <span>
              아이디(e-mail)
              <span style={{ color: email ? "blue" : "red" }}>
                {email ? "중복 확인" : "중복 확인을 해주세요"}
              </span>
            </span>

            <div onClick={CheckId}>중복 확인</div>
          </div>
          <input
            id="email"
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            required
            onChange={changeInput}
          />
          {/* <button onClick={next}>다음</button> */}
        </div>
      )}
      {signNumber === 1 && (
        <div>
          <div>
            <span>
              닉네임
              <span style={{ color: nick ? "blue" : "red" }}>
                {nick ? "중복 확인" : "중복 확인을 해주세요"}
              </span>
            </span>

            <div onClick={CheckNick}>중복 확인</div>
          </div>
          <input
            id="nickname"
            placeholder="닉네임을 입력해주세요"
            required
            onChange={changeInput}
          />
        </div>
      )}
      {signNumber === 2 && (
        <Fragment>
          <div>
            <span>비밀번호</span>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              required
              onChange={changeInput}
            />
          </div>
          <div>
            <span>
              비밀번호 확인
              <span style={{ color: pw ? "blue" : "red" }}>
                {pw
                  ? "비밀 번호가 일치합니다"
                  : "비밀 번호가 일치하지 않습니다"}
              </span>
            </span>

            <input
              id="confirm"
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요"
              required
              onChange={changeInput}
            />
          </div>
        </Fragment>
      )}
      {/* email: "",
    password: "",
    confirm: "",
    nickname: "",
    age: "",
    address: "",
    gender: "",
    interests: {
      sports: 0,
      movie: 0,
      food: 0,
      pet: 0,
      music: 0,
    },
    imageUrl: "", */}
      {signNumber === 3 && (
        <input
          id="age"
          type="text"
          placeholder="나이를 적어주세요"
          required
          onChange={changeInput}
        />
      )}
      {signNumber === 4 && (
        <input
          id="address"
          type="text"
          placeholder="주소를 적어주세요"
          required
          onChange={changeInput}
        />
      )}
      {signNumber === 5 && (
        <input
          id="gender"
          type="text"
          placeholder="성별을 적어주세요"
          required
          onChange={changeInput}
        />
      )}
      {signNumber === 6 && (
        <input
          id="interests"
          type="text"
          placeholder="관심사를 적어주세요"
          required
          onChange={changeInput}
        />
      )}
      {signNumber === 7 && (
        <input
          id="imageUrl"
          type="text"
          placeholder="관심사를 적어주세요"
          required
          onChange={changeInput}
        />
      )}

      <button type="submit" style={buttonStyle}>
        회원가입 완료
      </button>
    </form>
  );
}
