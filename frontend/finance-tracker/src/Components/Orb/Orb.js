import React from "react";
import { keyframes, styled } from "styled-components";

function Orb() {
  const moveOrb = keyframes`
    0%{
        transform: translate(0, 0);
    }
    50%{
        transform: translate(400px, 500px);
    }
    100%{
        transform: translate(0, 0);
    }
    `;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(400px);
    animation: ${moveOrb} 15s alternate linear infinite;
  `;
  //animation will be infinite and 15 sec each
  return <OrbStyled></OrbStyled>;
}

export default Orb;
