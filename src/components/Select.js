import styled from "styled-components";
import { AiFillCaretDown, AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

const Select = ({ list }) => {
  const [isClick, setIsClick] = useState(false);
  const [selectedOps, setSelectedOps] = useState(list[0].text);
  const [SelectedId, setSelectedId] = useState(0);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const handleOps = (text, id) => {
    setSelectedOps(text);
    setSelectedId(id);
    setIsClick(!isClick);
  };

  const renderList = () => {
    return list.map((el) => {
      return (
        <OptionWrapper onClick={() => handleOps(el.text, el.id)}>
          <AiOutlineCheck></AiOutlineCheck>
          <StyledText>{el.text}</StyledText>
        </OptionWrapper>
      );
    });
  };

  return (
    <Wrapper>
      <SelectedOption onClick={handleClick}>
        <StyledText>{selectedOps}</StyledText>
        <AiFillCaretDown></AiFillCaretDown>
      </SelectedOption>
      {isClick ? <ListWrapper>{renderList()}</ListWrapper> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 150px;
  height: 20px;
  border-radius: 10px;
  justify-content: space-between;

  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 20px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 10;
  background: white;
`;

const StyledText = styled.div``;

const ListWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 5px;
  border-radius: 10px;
  position: relative;
  top: -10px;
  z-index: 3;

  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
`;

const OptionWrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 5px;
  display: flex;

  &:hover {
    background: #eee;
  }
  & svg {
    margin-right: 15px;
  }
`;

export default Select;
