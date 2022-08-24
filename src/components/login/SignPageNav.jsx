import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { MdLocalFireDepartment } from "react-icons/md";

const SignPageNav = () => {
  const navigate = useNavigate();

  return (
    <StSignPageNav>
      <MdLocalFireDepartment
        onClick={() => {
          navigate(`/swipe`);
        }}
      />
    </StSignPageNav>
  );
};

export default SignPageNav;

const StSignPageNav = styled.div`
  width: 100%;
  height: 70px;
  line-height: 68px;

  background-color: #fff;
  font-size: 1.2em;
  font-weight: 700;

  position: absolute;
  top: 0;
  left: 0;

  svg {
    font-size: 2.2em;
    position: absolute;
    left: 20px;
    color: #ff4e6a;

    cursor: pointer;
  }
`;
