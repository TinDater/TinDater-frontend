import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OnFileUpload from "../../s3/FileUpload";
import logo from "../../src_assets/logo.PNG";

import {
  changeCheckName,
  changeCheckNick,
  __checkNickname,
  __checkUsername,
  __signup,
} from "../../store/modules/signupSlice";

export default function SignUpForm() {
  const checkName = useSelector((state) => state.signup.checkName);

  const checkNick = useSelector((state) => state.signup.checkNick);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formstate, setFromState] = useState(false);
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
  const email = checkName;
  const nick = checkNick;
  const [pw, setPw] = useState(false);

  const [post, setPost] = useState("");

  const [change, setChange] = useState(false);
  const [imageSrc, setImageSrc] = useState();

  const changeInput = (e) => {
    const { value, id } = e.target;
    setSignData({ ...signData, [id]: value });
    console.log(signData);
    if (id === "email") dispatch(changeCheckName());
    if (id === "nickname") dispatch(changeCheckNick());
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    const checkState = await dispatch(__signup(signData));
    if (checkState.payload) {
      navigate("/swipe");
    }
  };

  const readFile = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const view = (e) => {
    e.preventDefault();
    console.log(signData);
  };

  const next = (e) => {
    e.preventDefault();
    setSignNumber((prevNumber) => prevNumber + 1);
  };

  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const CheckId = () => {
    if (!regEmail.test(signData.email)) {
      alert("이메일 형식으로 작성해주세요");
    } else {
      dispatch(__checkUsername(signData.email));
    }
  };
  const CheckNick = () => {
    dispatch(__checkNickname(signData.nickname));
  };

  React.useEffect(() => {
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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (post.imageUrl == "") {
      alert("내용을 기입해주세요");
      return;
    }
    setSignData({ ...signData, imageUrl: post });
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
          <div>
            {change ? (
              <img src={imageSrc} alt="이미지를 불러올 수 없습니다" />
            ) : (
              <img src={logo} alt="이미지를 불러올 수 없습니다" />
            )}
          </div>
          <input
            required
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            onChange={(e) => {
              OnFileUpload(e);
              readFile(e.target.files[0]);
              setChange(true);
              setPost(e.target.files[0].name);
            }}
          />
          <div>
            <button onClick={onSubmitHandler}>저장</button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              닫기
            </button>
            <button onClick={view}>zzz</button>
          </div>
        </Fragment>
      )}

      <button type="submit" style={buttonStyle}>
        회원가입 완료
      </button>
    </form>
  );
}
