import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const UserPageBody = (props) => {
  const navigate = useNavigate();

  const {interest} = props.curr_user;
  const hobbies = ['일어 나기', '밥 먹기', '잠 자기', '달리기', '마라톤']

  return (
    <StUserPageBody>
      
      <div className="interest_box">
          {/* { interest.map( (inte, i) => {
            return ( Number(inte) ?
              <div className="tag" key={i}>
                {hobbies[i]}
              </div> : ""
            )
          }) } */}
        </div>

        <div>
          <button
            onClick={()=> navigate('/like')}
          >
            내가 좋아한 사람 보러가기
          </button>

          <button
            onClick={()=> navigate('/like')}
          >
            메인으로 돌아가기
          </button>
        </div>
        
    </StUserPageBody>
  )
};

export default UserPageBody;

const StUserPageBody = styled.div`

  width: 100%;
  flex: 1 1 auto;

  padding-top: 30px;
  padding-bottom: 5%;
  box-sizing: border-box;

  display: flex;
  flex-flow: column;
  justify-content: space-between;

  .interest_box {
    margin-bottom: 25px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    
    .tag {
      padding: 5px 12px;
      border-radius: 20px;
      background-color: #393836;
      color: #fff;
    }
  }
  
  button {
    all: unset;
    width: 70%;
    max-width: 400px;
    height: 65px;
    border-radius: 65px;
    
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
`