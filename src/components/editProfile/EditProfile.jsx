import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// aws s3와 연동하여 파일을 업로드하는 모듈
import OnFileUpload from "../../s3/FileUpload";
// 이미지 업로드할때 보여지는 기본이미지
import logo from "../../src_assets/logo.PNG";
// 리듀서 모듈
// // // 수정용 모듈 추가
import {
  changeCheckName,
  changeCheckNick,
  __checkNickname,
  __checkUsername,
  __editProfile,
} from "../../store/modules/signupSlice";

// 회원 정보 수정 컴포넌트
function EditProfile() {
  // 이름 중복확인 상태 값 가져오기
  // 기본값은 false 입니다.
  const checkName = useSelector((state) => state.signup.checkName);
  // 닉네임 중복확인 상태 값 가져오기
  // 기본값은 false 입니다.
  const checkNick = useSelector((state) => state.signup.checkNick);
  // // // 수정을 위해 loginSlice의 userId 가져오기
  const userId = useSelector((state) => state.login.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 버튼 활성화를 위한 상태관리
  const [formstate, setFormState] = useState(false);
  // 보낼 데이터 상태관리
  const [signData, setSignData] = useState({
    // // // 수정이기 때문에 userId 추가
    userId: "",
    email: "",
    password: "",
    confirm: "",
    nickname: "",
    age: "",
    address: "",
    gender: "",
    interest: [0, 0, 0, 0, 0],
    imageUrl: "",
  });

  // // // signData에 userId추가
  React.useEffect(() => {
    setSignData({ ...signData, userId: userId });
  }, []);

  // 조건 통과 상태를 위한 설정
  const email = checkName;
  const nick = checkNick;
  const [pw, setPw] = useState(false);
  const [age, setAge] = useState(false);
  const [address, setAddress] = useState(false);
  const [gender, setGender] = useState(false);
  const [file, setFile] = useState(false);

  // 조건부 렌더링을 위한 상태관리
  const [signNumber, setSignNumber] = useState(0);

  // 이메일과 패스워드 유효성검사
  // 이메일, 닉네임 중복검사 함수
  const regEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const regPw =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  const CheckId = () => {
    // 이메일 유효성 체크 후 중복체크
    if (!regEmail.test(signData.email)) {
      alert("이메일 형식으로 작성해주세요");
    } else {
      dispatch(__checkUsername({ email: signData.email }));
    }
  };
  const CheckNick = () => {
    // 닉네임 중복체크
    dispatch(__checkNickname({ nickname: signData.nickname }));
  };

  React.useEffect(() => {
    // 비밀번호 일치 조건 확인 및 유효성 검사
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
    // age 빈칸인지 체크
    if (signData.age !== "") {
      setAge(true);
    } else {
      setAge(false);
    }
  }, [signData]);

  // input 데이터 저장하기
  const changeInput = (e) => {
    const { value, id } = e.target;
    setSignData({ ...signData, [id]: value });
    console.log(signData);
    // 중복 확인한 데이터들만 변경시(age제외) 상태 false로 변환하는 action 실행
    if (id === "email") dispatch(changeCheckName());
    if (id === "nickname") dispatch(changeCheckNick());
  };

  // 파일 업로드를 위한 상태관리
  const [post, setPost] = useState("");
  const [change, setChange] = useState(false);
  const [imageSrc, setImageSrc] = useState();

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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (post.imageUrl == "") {
      alert("내용을 기입해주세요");
      return;
    }
    setSignData({ ...signData, imageUrl: post });
    setFile(true);
  };

  // 그동안 수집한 회원가입 데이터(signData)를 백에게 보냄
  // // // dispatch하는 함수는 __editProfile이다.
  const submitLogin = async (e) => {
    e.preventDefault();
    const checkState = await dispatch(__editProfile(signData));
    if (checkState.payload) {
      // 이후 swipe페이지로 navigate
      navigate("/swipe");
    }
  };

  React.useEffect(() => {
    // 조건들이 성립되었는지 체크하고 버튼 활성화
    if (email && nick && pw && age && address && gender && file) {
      setFormState(true);
    } else {
      setFormState(false);
    }
  }, [email, nick, pw, age, address, gender, file]);

  const buttonStyle = {
    backgroundColor: formstate ? "blue" : "grey",
    color: formstate ? "white" : "black",
    disabled: !formstate,
  };

  return (
    <form onSubmit={submitLogin}>
      {/* {signNumber === 0 && (
        <Fragment>
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
        </Fragment>
      )} */}
      {signNumber === 0 && (
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
      {signNumber === 1 && (
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
      {signNumber === 2 && (
        <div>
          <input
            id="age"
            placeholder="나이를 입력해주세요 => 30"
            required
            onChange={(e) => {
              // 숫자로 들어갈 수 있게 변경
              setSignData({ ...signData, age: parseInt(e.target.value) });
              setAddress(true);
            }}
          />
          <button onClick={next}>다음</button>
        </div>
      )}
      {signNumber === 3 && (
        <Fragment>
          <select
            // signData에 인라인으로 바로 넣어줌(지역)
            onChange={(e) => {
              setSignData({ ...signData, address: e.target.value });
              setAddress(true);
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
      {signNumber === 4 && (
        <Fragment>
          <select
            // signData에 인라인으로 바로 넣어줌(성별)
            onChange={(e) => {
              // 여자인 경우는 true, 남자는 false를 보내준다.
              if (e.target.value === "여자")
                setSignData({ ...signData, gender: true });
              else if (e.target.value === "남자")
                setSignData({ ...signData, gender: false });
              setGender(true);
            }}
          >
            <option value="none">===선택===</option>
            <option value="여자">여자</option>
            <option value="남자">남자</option>
          </select>
          <button onClick={next}>다음</button>
        </Fragment>
      )}
      {signNumber === 5 && (
        <Fragment>
          <span>관심사를 선택해주세요</span>
          <div
            // 관심사를 배열로 보내줘야 하기에 각 인덱스 번호를
            // 클릭시 ++하고 나중에 한번에 보내줌
            onClick={() => {
              signData.interest[0]++;
            }}
            style={{ cursor: "pointer" }}
          >
            sports
          </div>
          <div
            onClick={() => {
              signData.interest[1]++;
            }}
            style={{ cursor: "pointer" }}
          >
            movie
          </div>
          <div
            onClick={() => {
              signData.interest[2]++;
            }}
            style={{ cursor: "pointer" }}
          >
            food
          </div>
          <div
            onClick={() => {
              signData.interest[3]++;
            }}
            style={{ cursor: "pointer" }}
          >
            pet
          </div>
          <div
            onClick={() => {
              signData.interest[4]++;
            }}
            style={{ cursor: "pointer" }}
          >
            music
          </div>
          <button onClick={next}>다음</button>
        </Fragment>
      )}
      {signNumber === 6 && (
        <Fragment>
          <div>
            {change ? (
              // 이미지 선택시에는 선택한 이미지
              <img src={imageSrc} alt="이미지를 불러올 수 없습니다" />
            ) : (
              // 이미지 비선택시에는 기본이미지(logo.PNG)
              <img src={logo} alt="이미지를 불러올 수 없습니다" />
            )}
          </div>
          <input
            // 파일업로드 부분
            required
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            onChange={(e) => {
              OnFileUpload(e);
              // FileReader와 Promise객체 사용
              readFile(e.target.files[0]);
              // 이미지 비선택시 기본이미지를 위한 상태관리
              setChange(true);
              // post에 input에서 선택한 파일 넣어줌
              setPost(e.target.files[0].name);
            }}
          />
          <div>
            <button onClick={onSubmitHandler}>프로필 사진 확정</button>
            <button onClick={view}>signData 확인</button>
          </div>
        </Fragment>
      )}
      <button type="submit" style={buttonStyle}>
        {/* 회원정보 수정완료로 텍스트 변경 */}
        {`회원정보 수정 완료 (${signNumber}/6)`}
      </button>
    </form>
  );
}

export default EditProfile;
