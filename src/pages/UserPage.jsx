import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {__getUser} from '../store/modules/swipeSlice'

import styled from "styled-components";

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(__getUser(curr_user.userId))
  }, [])  
  
  const curr_user = useSelector(state => state.swipe.user)
  const {nickname, address, age, interest} = curr_user
  const list = ['일어 나기', '밥 먹기', '잠 자기', '달리기', '마라톤']

  return (
    <StUserPage>
    
      <nav className="header_top">
        <span className="icon">‹</span>
        프로필
      </nav>

      <section className="page_head">
        <div className="profile_picture"></div>
        <p className="title">
          {nickname}, {age}
        </p>
        <p className="address">
          {address}
        </p>
      </section>
      
      <section className="page_body">
        
        <div className="interest_box">
          { interest.map( (inte, i) => {
            return ( 
              inte ?
              <div className="tag" key={i}>
                {list[i]}
              </div> 
              :""
            )
          }) }
        </div>

        <button
          onClick={()=> navigate('/like')}
        >
          내가 좋아한 사람 보러가기
        </button>
      </section>
    
    </StUserPage>
  )
};

export default UserPage;

const StUserPage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  
  display: flex;
  flex-flow: column;
  align-items: center;

  text-align: center;

  position: absolute;
  top: 0;
  left: 0;

  .header_top {
    width: 100%;
    height: 70px;
    line-height: 68px;

    background-color: #fff;
    font-size: 1.2em;
    font-weight: 700;
    
    position: relative;
    
    .icon {
      position: absolute;
      left: 20px;
    }
  }
  
  .page_head {
    width: 100%;
    background-color: #fff;

    .profile_picture {
      width: 160px;
      height: 160px;
      border-radius: 50%;

      margin: 0 auto;
      margin-top: 30px;

      background-color: #ddd;
    }

    .title {
      margin: 12px 0 0;
      font-size: 1.5em;
      font-weight: 700;
    }
    
    .address {
      margin: 8px 0;
      font-size: 1.1em;
      font-weight: 500;
    }
  }
  
  .page_body {
    width: 100%;
    flex: 1 1 auto;

    padding-top: 30px;
    padding-bottom: 50px;
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
      line-height: 65px;
      
      border-radius: 65px;
      margin: 0 auto;

      font-size: 1.2em;
      font-weight: 700;

      background-color: #fff;
      color: #222;
      box-shadow: 0 3px 5px #c7c7c7;

      cursor: pointer;
    }
  }


  `;
