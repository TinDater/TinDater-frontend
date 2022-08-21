import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Swipe from "../pages/Swipe";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound"
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Match from "../pages/Match";
import MyPage from "../pages/MyPage";
import UserPage from "../pages/UserPage";

const Router = () => {
  return (
    <StLayout>
      <Header />

      <StContent>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/swipe" element={<Swipe />} />
          <Route path="/swipe/match" element={<Match />} />
          <Route path="/mypage" element={<UserPage />} />
          <Route path="/userpage/:userId" element={<UserPage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </StContent>

      <Footer/>
    </StLayout>
  );
};

export default Router;

const StLayout = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;

  background-color: #fff;
  position: relative;
`

const StContent = styled.div`
  height: calc(100vh - 150px);

  padding: 0.5em 0.5em;
  box-sizing: border-box;
`