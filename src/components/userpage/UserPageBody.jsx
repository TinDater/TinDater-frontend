import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Map from "../../map/Map";

const UserPageBody = (props) => {
  const navigate = useNavigate();

  const {interest} = props.curr_user;
  const interest_name2 = ["소셜 미디어", "영화", "커피", "헬스", "웹 개발", "스포츠", "해외축구", "미술관 관람", "산책", "음악감상"]

  return (
    <StUserPageBody>

      <div className="interest_box">
          { interest.map( (inte, i) => {
            return ( Number(inte) ?
              <div className="tag" key={i}>
                {interest_name2[i]}
              </div> : ""
            )
          }) }
        </div>

        <div className="user_button_box">
          <button
            onClick={()=> navigate('/like')}
          >
            내가 좋아한 사람 보러가기
          </button>

          <button
            onClick={()=> navigate('/swipe')}
          >
            틴데이터로 돌아가기
          </button>
        </div>
        
        <div className="map_area">
          <Map curr_user={props.curr_user} />
        </div>

    </StUserPageBody>
  );
};

export default UserPageBody;

const StUserPageBody = styled.div`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;

  padding-top: 30px;
  padding-bottom: 5%;
  box-sizing: border-box;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
  
  position: relative;
  
  .interest_box {
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 0 10%;

    font-size: 14px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 9px;
    
    position: relative;
    z-index: 9999;

    .tag {
      padding: 5px 12px;
      border-radius: 20px;
      background-color: #d5678f;
      color: #fff;
    }
  }

  button {
    all: unset;
    width: 70%;
    max-width: 400px;
    height: 60px;
    border-radius: 60px;
    
    margin: 0 auto 16px;
    padding: 0 20px;
    box-sizing: border-box;

    font-size: 1.2em;
    font-weight: 700;
    word-break: keep-all;

    background-color: #fff;
    color: #222;
    box-shadow: 0 3px 5px #c7c7c7;

    cursor: pointer;
  }
  
  .user_button_box {
    width: 100%;
    position: absolute;
    bottom: 30px;
    
    z-index: 9999;
  }

  .mypage_body {
    width: 100%;
    height: 100%;
    
    position: relative;

    .button_box {
      width: 80%;
      margin: 0 auto;
      position: relative;
  
      transform: translateY(60px);
      z-index: 9999;
      
      cursor: pointer;
      transition: all 0.2s;
      
      &:hover .button_go_profile {
        opacity: 0.9;
      }
  
      .button_go_profile {
        color: #222;
  
        font-size: 10px;
  
        display: flex;
        align-items: center;
        flex-flow: column;
      
        position: absolute;
        top: -20px;
        right: 0px;
        transform: translateY(-100%);
  
        svg {
          width: 50px;
          height: 50px;
          border-radius: 50%;
  
          padding: 10px;
          box-sizing: border-box;
          margin-bottom: 4px;
  
          background: #ccc;
          color: #555;
          box-shadow: 0 2px 5px #c7c7c7;
  
          font-size: 30px;
        }
      }
    }
  }
`
