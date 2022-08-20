import { Route, Routes } from "react-router-dom";
import Swipe from "../pages/Swipe";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/swipe" element={<Swipe />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default Router;
