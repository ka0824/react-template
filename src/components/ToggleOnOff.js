import styled from "styled-components";
import { useState } from "react";

const ToggleOnOff = () => {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <Wrapper onClick={handleClick} isClick={isClick}>
      <TextWrapper>
        <StyledText>On</StyledText>
        <StyledText>Off</StyledText>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60px;
  height: 30px;
  background: #eee;
  border-radius: 10px;

  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;

  transition: 0.5s;

  background: ${({ isClick }) => {
    if (isClick) {
      return "grey";
    } else {
      return "#eee";
    }
  }};

  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    background: #404040;
    position: relative;

    z-index: 10;
    border-radius: 10px;
    transition: 0.5s;

    -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;

    transform: ${({ isClick }) => {
      if (isClick) {
        return `translate(30px, 0)`;
      } else {
        return `translate(0, 0)`;
      }
    }};
  }

  &:hover {
    cursor: pointer;
  }
`;

const TextWrapper = styled.div`
  top: -100%;
  position: relative;
  display: flex;
  z-index: 5;
`;

const StyledText = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  height: 30px;
  line-height: 30px;
  color: black;
`;

export default ToggleOnOff;
