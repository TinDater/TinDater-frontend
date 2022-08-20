import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import NotFound from "../pages/NotFound"
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default Router;
