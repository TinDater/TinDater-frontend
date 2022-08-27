import React from "react";
import styled from "styled-components";

function ProgressBar(props) {
    const {signNumber} = props
    return (
    <Bar>
        <HighLight width={(signNumber / 8) * 100 + "%"}/>
    </Bar>
    )
}

const Bar = styled.div`
    background: #eee;
    width: 100%;
    height: 20px;
    align-items: start !important;

    position: absolute;
    top: 0;
`;

const HighLight = styled.div`
    background: linear-gradient(50deg, #ff398c, #ffac5f);;
    width: ${(props) => props.width} !important;
    height: 26px;
    animation: barScale 1s forwards;

    @keyframes barScale {
        0% { transform: scaleX(0.5) }
        100% { transform: scaleX(1) }
    }
`;
export default ProgressBar;
