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
  // const gender_ref = React.useRef(null);
  // const address_ref = React.useRef(null);

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
    interests: [0, 0, 0, 0, 0],
    imageUrl: "",
  });
  const [signNumber, setSignNumber] = useState(0);
  // console.log(address_ref);
  // React.useEffect(() => {
  //   setSignData({ ...signData, address: address_ref.current.value });
  //   setSignData({ ...signData, gender: gender_ref.current.value });
  // }, [address_ref, gender_ref]);

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

  const view = () => {
    console.log(signData);
  };

  const next = (e) => {
    e.preventDefault();
    setSignNumber((prevNumber) => prevNumber + 1);
  };

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
    // setSignNumber(1);
  };
  const CheckNick = () => {
    dispatch(__checkNickname(signData.nickname));
  };

  React.useEffect(() => {
    // 비밀번호 일치 조건 확인
    if (
      signData.confirm === signData.password &&
      signData.password !== "" &&
      !regPw.test(signData.password)
    ) {
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

  const interestFunc = (index) => {
    signData.interests[index]++;
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
          <button onClick={next}>다음</button>
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
          <button onClick={next}>다음</button>
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
          <button onClick={next}>다음</button>
        </Fragment>
      )}
      {signNumber === 3 && (
        <div>
          <input
            id="age"
            placeholder="나이를 입력해주세요 => 30"
            required
            onChange={changeInput}
          />
          <button onClick={next}>다음</button>
        </div>
      )}
      {signNumber === 4 && (
        <Fragment>
          <select
            onChange={(e) => {
              setSignData({ ...signData, address: e.target.value });
            }}
          >
            <option value="none">===선택===</option>
            <option value="서울">서울</option>
            <option value="인천">인천</option>
            <option value="경기">경기</option>
            <option value="충청">충청</option>
            <option value="강원">강원</option>
            <option value="경상">경상</option>
            <option value="전라">전라</option>
            <option value="제주">제주</option>
          </select>
          <button onClick={next}>다음</button>
        </Fragment>
      )}
      {signNumber === 5 && (
        <Fragment>
          <button onClick={view}>zzz</button>
          <select
            onChange={(e) => {
              setSignData({ ...signData, gender: e.target.value });
            }}
          >
            <option value="none">===선택===</option>
            <option value="여자">여자</option>
            <option value="남자">남자</option>
          </select>
          <button onClick={next}>다음</button>
        </Fragment>
      )}
      {signNumber === 6 && (
        <Fragment>
          <span>관심사를 선택해주세요</span>
          <div
            onClick={() => {
              signData.interests[0]++;
            }}
            style={{ cursor: "pointer" }}
          >
            sports
          </div>
          <div
            onClick={() => {
              signData.interests[1]++;
            }}
            style={{ cursor: "pointer" }}
          >
            movie
          </div>
          <div
            onClick={() => {
              signData.interests[2]++;
            }}
            style={{ cursor: "pointer" }}
          >
            food
          </div>
          <div
            onClick={() => {
              signData.interests[3]++;
            }}
            style={{ cursor: "pointer" }}
          >
            pet
          </div>
          <div
            onClick={() => {
              signData.interests[4]++;
            }}
            style={{ cursor: "pointer" }}
          >
            music
          </div>
          <button onClick={next}>다음</button>
        </Fragment>
      )}
      {signNumber === 7 && (
        <Fragment>
          <button onClick={view}>zzz</button>
          <input
            id="imageUrl"
            type="text"
            placeholder="관심사를 적어주세요"
            required
            onChange={changeInput}
          />
        </Fragment>
      )}

      <button type="submit" style={buttonStyle}>
        회원가입 완료
      </button>
    </form>
  );
}
