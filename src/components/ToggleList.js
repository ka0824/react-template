import styled from "styled-components";
import { useState } from "react";

const testList = ["test1", "test2", "test3"];

const ToggleList = () => {
  const [isClickedIdx, setIsClickedIdx] = useState(0);

  const handleClick = (idx) => {
    setIsClickedIdx(idx);
  };

  const renderList = () => {
    return (
      <Wrapper>
        {testList.map((el, idx) => {
          return (
            <StyledText
              onClick={() => handleClick(idx)}
              isClickedIdx={isClickedIdx}
              idx={idx}
            >
              {el}
            </StyledText>
          );
        })}
      </Wrapper>
    );
  };

  return renderList();
};

const Wrapper = styled.div`
  width: 300px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;

  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

const StyledText = styled.div`
  width: 100px;
  text-align: center;
  height: 20px;
  line-height: 20px;

  background: ${({ isClickedIdx, idx }) => {
    if (isClickedIdx === idx) {
      return "#eee";
    } else {
      return "white";
    }
  }};

  transition: 0.2s;

  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

export default ToggleList;
