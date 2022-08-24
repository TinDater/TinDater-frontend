import React from "react";

import SignUpForm from "../components/login/SignUpForm";
import SignPageNav from "../components/login/SignPageNav";
import styled from "styled-components";

function SignUp() {
  return (
    <div>
      <SignPageNav />
      <SignUpForm />
    </div>
  )
}

export default SignUp;
