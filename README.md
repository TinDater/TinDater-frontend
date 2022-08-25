# TinDater
>틴데이터는 Tinder와 Gather의 합성어로, 게더친을 만날 수 있는  
"틴더 투 게더"라는 컨셉으로 제작한 사이트입니다.  
모바일 환경에 맞춰 가로 768px부터 320px까지 고려하여 제작하였습니다.  
>
![220825-1920-1080](https://user-images.githubusercontent.com/94776135/186698617-e624ce28-fc18-449f-b197-729579cd9313.png)

---

![220825-280-160](https://user-images.githubusercontent.com/94776135/186698640-6bef38c6-c3a5-49e1-b3e7-d99578710039.png)

🔥 2022년 8월 25일 배포 완료하였습니다.(28일 close예정)  
http://dusunax.s3-website.ap-northeast-2.amazonaws.com/

---

### 주제
클론코딩, **Tinder**  
### 작업기간
2022년 8월 19일~25일  
### 팀원
Front-end **박준수**, **유지완**, **두선아**  
Back-end **이재철**, **전지원**, **김민선**  


## 배포
- 어플리케이션 배포에 S3 사용
  - http://dusunax.s3-website.ap-northeast-2.amazonaws.com/
- 이미지 업로드에 S3 사용
- 서버 배포에 EC2 사용

## 팀 노션 페이지
https://global-giraffe-ef7.notion.site/SA-6-3618638bd1a3409c8828a027faa3772a  
## API 명세서  
https://www.notion.so/SA-6-3618638bd1a3409c8828a027faa3772a#0aecad27ccb743f5a72c3f16a3520888
## 프론트엔드  
https://global-giraffe-ef7.notion.site/f8b375aeae2044208f81b349e6eadff1  
## 백엔드  
https://global-giraffe-ef7.notion.site/49b8d99f9f60408292540d94f52543a7  

## 작업일정
- 작업 기간: 2022년 8월 19일 ~ 8월 25일
- 소통: 게더 내에서 9시 ~ 9시, 수시로 소통하기
- 회의: PM 4시~

---
## 1. 요구 기능

#### 1. 회원 가입
    
#### 2. **사진 업로드**
    - AWS-sdk 라이브러리 사용
    - src\s3\FileUpload.js에 관련 설정 정리
#### 3. 자기 소개
    - 카카오맵 API 사용
        - 추후 부가기능: 태그를 사용한 필터
#### 4. **스와이프** (유저를 좋아요 또는 싫어요 클릭)
    - 매 번 새로운 유저
    - 좋아요 또는 싫어요 이벤트하면 요청
#### 5. (보류)**소켓 socket**
    - 접속했을 때 DM
        - 접속하지 않았을 때 DM
---
## 2. 배워야 할 것
### AWS - sdk

<aside>
📌 [https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v3/developer-guide/s3-example-configuring-buckets.html](https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v3/developer-guide/s3-example-configuring-buckets.html)

</aside>

- AWS의 S3 버켓
    - 서버에 전송할 이미지를 업로드 하기 위해 사용할 것
    - 버킷 CORS 구성

---
## 3. 페이지별 구현 기능

##### 1. 로그인 페이지

- 유저 로그인: **토큰 ⇒ 쿠키에 저장**

##### 2. 회원가입 페이지

- **유저 정보 submit**
    - react hook form사용
- **이미지 저장(aws sdk), imageURL post**
- input종류별 **조건부 랜더링**
- 태그 정보는 다음과 같이 구성
    - [0,1,0,0,0,0,1,0]

##### 3. **스와이프 페이지**

- 받은 유저 데이터를 랜더링
- **좋아요**와 **싫어요** 클릭 시 API 명세에 따라 요청 보냄
    - 받은 유저 데이터를 리랜더링
    - 받은 유저 데이터와 좋아요 매치 시, 매치 페이지로 이동

##### 4. 좋아요 페이지

- 내가 좋아요한 사람 리스트(간략) 출력
    - 카드를 클릭하면 해당 사람의 마이페이지로 이동
- 매치된 사람의 카드는 다른 카드와 구분되는 스타일 적용
1. **마이 페이지 / 프로필 페이지**
    - 받아온 유저의 정보를 랜더링
        - (조건부 랜더링)
        유저 아이디와 로그인한 유저의 아이디가 같다면,
        프로필 수정 버튼 보여주기

##### 5. 프로필 수정 페이지

- 회원가입 페이지를 수정하여 만듦

##### 6. 매치 페이지

- 좋아요 페이지로 가는 버튼 만들기

##### 7. 404 페이지

- 스와이프 페이지으로 가기 버튼

---
## 4. Route Set-up

#### 각 페이지별 주소 설정
![](https://velog.velcdn.com/images/dusunax/post/9ccbb6c9-9971-4106-8795-60c69b04fc22/image.png)

---

## 5. 작업 진행 테이블
| 페이지명 | 담당 | 초안 완성 | 기능 구현 | 최종 완성 |
| --- | --- | --- | --- | --- |
| 회원가입 페이지 | 박준수 | 8월 21일 | 8월 21일 | 8월 25일 |
| 로그인 페이지 | 박준수 | 8월 21일 | 8월 21일 | 8월 25일 |
| 스와이프 페이지 | 두선아 | 8월 20일 | 8월 22일 | 8월 25일 |
| 내가 좋아요한 페이지 | 유지완 | 8월 22일 | 8월 22일 | 8월 24일 |
| 유저 상세 페이지 | 두선아 | 8월 22일 | 8월 22일 | 8월 24일 |
| 프로필 수정 페이지 | 박준수 | 8월 22일 | 8월 22일 | 8월 25일 |
| 매치 페이지 | 두선아 | 8월 21일 | 8월 21일 | 8월 23일 |
| 404 페이지 | 유지완 | 8월 20일 | 8월 21일 | 8월 22일 |
---

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

---
## 7. 로고 및 UI

### 로고

<aside>
📌 틴데이터 로고

![image](https://user-images.githubusercontent.com/94776135/186708842-c62b9d69-9735-4e5a-9f99-180db7713ccc.png)

![image](https://user-images.githubusercontent.com/94776135/186708904-6b19f0a8-a53e-4d09-bdcc-aaaf0a71f3c1.png)
![image](https://user-images.githubusercontent.com/94776135/186708951-8a2ecba7-863e-434b-a564-bafa7b4069e4.png)
</aside>

### 좋아요, 싫어요 아이콘 (벡터 작업)

![image](https://user-images.githubusercontent.com/94776135/186709124-59d933a6-39c7-4d19-b7cb-274d40f3b67c.png)
![image](https://user-images.githubusercontent.com/94776135/186709161-17f8aa1c-8dc0-43fe-a514-98d31e21849f.png)

### 아이콘
- react icon ⇒ material design
![image](https://user-images.githubusercontent.com/94776135/186709214-52911a32-efa2-4029-8d64-f34ababe8d24.png)
![image](https://user-images.githubusercontent.com/94776135/186709243-dfe20d24-0b5e-4224-bbea-334743202c43.png)
![image](https://user-images.githubusercontent.com/94776135/186709297-9c5435dc-0d54-4e07-8c4c-15f1fa2d375c.png)

---

## 8. 지도 API

- **카카오맵 API (feat React)**
    - 기본 [https://developers.kakao.com/docs/latest/ko/local/common](https://developers.kakao.com/docs/latest/ko/local/common)
    - 마커 이미지 [https://apis.map.kakao.com/web/sample/multipleMarkerImage/](https://apis.map.kakao.com/web/sample/multipleMarkerImage/)
- **Geolocation API 사용하기**
    - `geolocation` 객체 사용
    - [https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API](https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- 거리 구하기
    - getLength
    - **(A.x - B.x)^2 + (A.y-B.y)^2**

---

## 9. 안되는 기능 체크리스트(사용x)

### 이슈 페이지로 이동
- [https://github.com/TinDater/TinDater-frontend/issues](https://github.com/TinDater/TinDater-frontend/issues)

| 페이지 | 안되는 기능 / 내용 | 작업자 | 완료 |
| --- | --- | --- | --- |
| Swipe | 더이상 보여줄 유저가 없을 때, 예외처리 하기 | 선아 | 완료 |
| 전체 | 이미지 출력 url 전부 확인하기 ⇒ center / cover로 | 선아 | 완료 |
| 전체 | 새 리액트 앱을 생성하고, react-router-dom을 새로 설치 후
router를 작성하던 중 발생한 에러 https://github.com/TinDater/TinDater-frontend/issues/4 | 선아 | 완료 |
| Swipe | • API 서버 URL 연결 후, people/:userId/like 요청에 실패함
https://github.com/TinDater/TinDater-frontend/issues/17 | 선아 | 완료 |
| logIn | 로그인 회원가입 관련 버그
https://github.com/TinDater/TinDater-frontend/issues/19 | 준수 | 완료 |
| swipe/detail | 유저 상세 페이지 출력 이슈
https://github.com/TinDater/TinDater-frontend/issues/20 | 선아 | 완료 |
| env | .env 파일 특정 환경에서 작동하지 않는 이슈
https://github.com/TinDater/TinDater-frontend/issues/30 | 준수 | 완료 |
| 전체 | token & userId 관련, 새로고침시 상대유저 날라가는 이슈  | 준수 | 완료 |
| profile | Profile 페이지가 정상적으로 열리지 않는 이슈
https://github.com/TinDater/TinDater-frontend/issues/37 | 선아 | 완료 |
| swipe | 좋아요 싫어요 누를시 바로 유저없음 뜨는 이슈
https://github.com/TinDater/TinDater-frontend/issues/44 | 선아 | 완료 |
| 전체 | 스토어 데이터 흐름 변경
https://github.com/TinDater/TinDater-frontend/issues/47 | 선아 | 완료 |
| User | 맵 좌표가 한번씩 undefined으로 출력됨
https://github.com/TinDater/TinDater-frontend/issues/49 | 선아 | 완료 |
| SignUp/progress | 프로그레스바 컴포넌트 기능 추가후 무한로딩 에러
https://github.com/TinDater/TinDater-frontend/issues/40 | 지완 | 완료 |
| SignUp/styled | 프로프레스 바 움직임이 없는 오류
https://github.com/TinDater/TinDater-frontend/issues/40 | 지완 | 완료 |
| Map | S3 배포에서 카카오맵 에러
https://github.com/TinDater/TinDater-frontend/issues/52 | 선아 | 완료 |
| Map | 맵 좌표가 한번씩 undefined으로 출력됨
https://github.com/TinDater/TinDater-frontend/issues/49 | 선아 | 완료 |
| Mypage | 마이페이지 첫 로딩 시 좌표 0, 0 뜨는 버그 수정
https://github.com/TinDater/TinDater-frontend/issues/53 | 선아 | 완료 |
| signup | 회원가입시 중복확인을 눌러야만 다음단계로 넘어가게 수정
https://github.com/TinDater/TinDater-frontend/issues/51 | 준수 | 완료 |

---

## 10. 데이터 흐름

![image](https://user-images.githubusercontent.com/94776135/186711694-2558fa1f-8999-4b54-9f46-d011d25135a7.png)  
- 관련 이슈 https://github.com/TinDater/TinDater-frontend/issues/47
- 공통 부모 컴포넌트에서 관리
- state 끌어올리기

### State
- login
    - 로그인한 유저 정보
        - 취미 이름 배열
    - 토큰 / 쿠키 확인, 로그인 상태 관리
- signup
    - 회원가입할 때 필요한 체크 내용
    - success, checkName, checkNick, userId
- swipe
    - 다른 사람 유저 정보
        - 취미 이름 배열
- likesList
    - 나를 좋아한 사람의 목록
        - 평소에는 비어 있음
            - 라이크 페이지에서만 필요함

### 데이터 불러오는 곳
- App 상단
    - 토큰 확인
- 라우터
    - 로그인 유저 확인
- Swipe.jsx
    - 각 페이지 유저

---


# 스크린샷

![image](https://user-images.githubusercontent.com/94776135/186714055-bd167f8e-642b-4116-b630-164b1c826510.png)

### test 사이즈: 360 x 740  
- 시간상 모바일 반응형 커버리지가 완벽하진 않지만 리액트로 모바일 웹을 구현하는 좋은 경험이었습니다.

![000-main](https://user-images.githubusercontent.com/94776135/186718383-5563047c-3bc9-458d-b1ca-e0fd80f1926c.png)
![007](https://user-images.githubusercontent.com/94776135/186718754-d8998473-fa7f-45f9-a11b-16baa50bcf8f.png)
![008](https://user-images.githubusercontent.com/94776135/186718763-6ae1ea68-d3ae-49ad-905d-dd4f3312f908.png)
![009](https://user-images.githubusercontent.com/94776135/186718819-c237f32a-836f-4372-99e6-afc24b3734d3.png)
![010](https://user-images.githubusercontent.com/94776135/186718832-ad2d66d0-33a4-4b54-b832-efd0b5b360f0.png)
![011](https://user-images.githubusercontent.com/94776135/186718845-264f7984-1fba-4f32-b364-bf3ec9e8d428.png)
![012](https://user-images.githubusercontent.com/94776135/186718850-f44f4634-a844-4c65-9246-27d531ea5482.png)
![014](https://user-images.githubusercontent.com/94776135/186718856-faf7a208-b87f-495e-a65f-104eb302c201.png)
![016](https://user-images.githubusercontent.com/94776135/186718871-985878b4-98dd-48f9-bdf0-b16de5116947.png)
![015](https://user-images.githubusercontent.com/94776135/186718862-f4b13440-34f8-4369-ae8f-a79ccc9006db.png)

# 모바일 환경 테스트
#### 갤럭시 S10e로 직접 촬영
![image](https://user-images.githubusercontent.com/94776135/186714157-f55f2de6-32ac-4923-b41b-5284a5536b93.png)
![image](https://user-images.githubusercontent.com/94776135/186714298-ba7be48a-a8bf-4b33-a5a3-a869e0d9e8cf.png)
![image](https://user-images.githubusercontent.com/94776135/186714332-20ce53da-c963-46e0-a061-256a651fce83.png)
![image](https://user-images.githubusercontent.com/94776135/186714358-da12f3e2-f30c-481e-a23f-7f066363745d.png)

---

### 6조 조원분들 모두 너무 너무 수고하셨습니다✨

![image](https://user-images.githubusercontent.com/94776135/186721745-b5ee5830-9c5a-4bd0-9be7-36bee3540dc3.png)
![image](https://user-images.githubusercontent.com/94776135/186721838-fafce6d7-5cae-467f-b268-72f9dc64bda6.png)
![image](https://user-images.githubusercontent.com/94776135/186721908-bd29ac8c-fcad-4735-8215-a8819824af00.png)
![image](https://user-images.githubusercontent.com/94776135/186722001-4e07e897-c8c6-46f5-96e5-070fbcc76cb4.png)


