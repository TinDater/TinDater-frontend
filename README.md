# TinDater
---
**Tinder 클론코딩**  
작업기간: 2022년 8월 19일~25일  
팀원: 전지원, 박준수, 유지완, 김민선, 두선아, 이재철  

## 1. 요구 기능

#### 1. 회원 가입
    - react hook form
#### 2. **사진 업로드**
    - react hook form
        - **plan.b** 
        ⇒ 훅폼이 확실하지는 않으니 안된다면 
        ⇒ formdata객체 multipart/form-data사용 고려
#### 3. 자기 소개
    - 태그
        - 백이랑의 협업 및 소통 많이 필요
        - 추후 부가기능: 필터
#### 4. **스와이프** (유저를 좋아요 또는 싫어요 클릭)
    - 유저
        - 새로운 유저
    - 좋아요 또는 싫어요 이벤트하면 요청
#### 5. **소켓 socket**
    - 접속했을 때 DM
        - 접속하지 않았을 때 DM
---
## 2. 배워야 할 것
### React Hook Form

<aside>
📌 [https://react-hook-form.com/api](https://react-hook-form.com/api)

</aside>

- 리액트 form의 Validation 및 구독, 상태관리를 쉽게 할 수 있음
    - 자동 완성 관련 문제
        
        [https://velog.io/@moony_moon/React-React-Hook-Form-Webkit-자동완성-문제](https://velog.io/@moony_moon/React-React-Hook-Form-Webkit-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1-%EB%AC%B8%EC%A0%9C)
        

### AWS - sdk

<aside>
📌 [https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v3/developer-guide/s3-example-configuring-buckets.html](https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v3/developer-guide/s3-example-configuring-buckets.html)

</aside>

- AWS의 S3 버켓
    - 서버에 전송할 이미지를 업로드 하기 위해 사용할 것
    - 버킷 CORS 구성

### (예정)Socket.io

<aside>
📌 [https://socket.io/](https://socket.io/)

</aside>

- +) [socket.io](http://socket.io)  -  client
---
## 3. 페이지별 구현 기능

#### 1. 로그인 페이지

- 유저 로그인: **토큰 ⇒ 쿠키에 저장**

#### 2. 회원가입 페이지

- **유저 정보 submit**
    - react hook form사용
- **이미지 저장(aws sdk), imageURL post**
- input종류별 **조건부 랜더링**
- 태그 정보는 다음과 같이 구성
    - [0,1,0,0,0,0,1,0]

#### 3. **스와이프 페이지**

- 받은 유저 데이터를 랜더링
- **좋아요**와 **싫어요** 클릭 시 API 명세에 따라 요청 보냄
    - 받은 유저 데이터를 리랜더링
    - 받은 유저 데이터와 좋아요 매치 시, 매치 페이지로 이동

#### 4. 좋아요 페이지

- 내가 좋아요한 사람 리스트(간략) 출력
    - 카드를 클릭하면 해당 사람의 마이페이지로 이동
- 매치된 사람의 카드는 다른 카드와 구분되는 스타일 적용
1. **마이 페이지 / 프로필 페이지**
    - 받아온 유저의 정보를 랜더링
        - (조건부 랜더링)
        유저 아이디와 로그인한 유저의 아이디가 같다면,
        프로필 수정 버튼 보여주기

#### 5. 프로필 수정 페이지

- 회원가입 페이지를 수정하여 만듦

#### 6. 매치 페이지

- 좋아요 페이지로 가는 버튼 만들기

#### 7. 404 페이지

- 스와이프 페이지으로 가기 버튼

---
## 4. Route Set-up

#### 각 페이지별 주소 설정
![](https://velog.velcdn.com/images/dusunax/post/9ccbb6c9-9971-4106-8795-60c69b04fc22/image.png)

---

## 5. 작업 진행 테이블

| 페이지명 | 담당 | 초안 완성 | 기능 구현 | 최종 완성 |
| --- | --- | --- | --- | --- |
| 회원가입 페이지 | 박준수 |  |  |  |
| 로그인 페이지 | 박준수 |  |  |  |
| 스와이프 페이지 | 두선아 | 8월 20일 |  |  |
| 내가 좋아요한 페이지 | 유지완 |  |  |  |
| 유저 상세 페이지 | 두선아 |  |  |  |
| 프로필 수정 페이지 | 박준수 |  |  |  |
| 매치 페이지 | 두선아 |  |  |  |
| 404 페이지 | 유지완 | 8월 20일 |  |  |

---

## 6. 화면 구성/레이아웃

### **1. 모바일 웹 레이아웃 구성**

- 모바일 클라이언트 환경에 적합한 모바일 웹 페이지 레이아웃 구성하기

<aside>
📌 작업 기준 width: 720px(기준)
최대 width: 768px
반응형: 360px까지 고려(예정)

</aside>

### **2. 헤더 및 푸터 제작**

- header, footer 컴포넌트 제작 후 router에 연결하기

<aside>
📌 src/component/header/header.jsx
src/component/footer/footer.jsx

</aside>

