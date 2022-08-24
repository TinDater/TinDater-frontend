import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";

import Swipe from "../pages/Swipe";
import NotFound from "../pages/NotFound";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Match from "../pages/Match";
import MyPage from "../pages/MyPage";
import UserPage from "../pages/UserPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import LikePage from "../pages/LikePage";

const Router = () => {
  const bucketUrl = process.env.REACT_APP_S3_IMAGE_URL;
  const logginUser = useSelector((state) => state.login);

  const props = { logginUser, bucketUrl };

  return (
    <StLayout>
      <Header props={props} />

      <StContent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/swipe" element={<Swipe props={props} />} />
          <Route path="/swipe/match" element={<Match />} />
          <Route path="/mypage" element={<MyPage props={props} />} />
          <Route
            path="/userpage/:userId"
            element={<UserPage props={props} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/like" element={<LikePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </StContent>

      <Footer />
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
`;

const StContent = styled.div`
  height: calc(100vh - 150px);

  padding: 0.5em 0.5em;
  box-sizing: border-box;
`;
