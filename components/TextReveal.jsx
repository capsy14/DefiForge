import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const TextReveal = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText("DefiForge Presents");
  }, []);
  const revealAnimation = keyframes`
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

  const RevealText = styled.div`
    font-size: 4em;
    overflow: hidden;
    white-space: nowrap;
  `;

  const RevealSpan = styled.span`
    display: inline-block;
    opacity: 0;
    transform: translateY(100%);
    animation: ${revealAnimation} 0.5s forwards;
    animation-delay: ${(props) => `calc(0.03s * ${props.index})`};
    margin-right: 5px;
  `;

  return (
    <RevealText>
      {text.split("").map((char, index) => (
        <RevealSpan key={index} index={index + 1}>
          {char}
        </RevealSpan>
        // <></>
      ))}
    </RevealText>
  );
};

export default TextReveal;
