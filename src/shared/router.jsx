import { Route, Routes } from "react-router-dom";
import Swipe from "../pages/Swipe";
import Main from "../pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/swipe" element={<Swipe />} />
    </Routes>
  );
};

export default Router;
