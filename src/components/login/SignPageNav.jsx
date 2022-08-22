import styled from "styled-components";

const SignPageNav = () => {
  return (
    <StSignPageNav>
      <span className="icon">‹</span>
    </StSignPageNav>
  )
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
  
  .icon {
    position: absolute;
    left: 20px;
  }
`