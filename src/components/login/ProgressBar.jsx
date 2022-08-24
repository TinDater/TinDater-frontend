import React from "react";
import styled from "styled-components";

function ProgressBar(props) {
    const {signNumber} = props
   console.log((signNumber / 7) * 100 + "%")
    return (
   <Bar>
    <HighLight width={(signNumber / 7) * 100 + "%"}/>
   </Bar>
  )
  
}

const Bar = styled.div`
    background: #eee;
    width: 100%;
    height: 40px;

`;

const HighLight = styled.div`
    background: orange;
    width ${(props) => props.width};
    height: 40px;
`;
export default ProgressBar;
