import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import Swipe from "../pages/Swipe";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound"
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <StLayout>
      <Header />

      <StContent>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/swipe" element={<Swipe />} />
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
`

const StContent = styled.div`
  height: calc(100vh - 150px);

  padding: 0.5em 0.5em;
  box-sizing: border-box;
`