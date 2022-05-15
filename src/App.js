import styled from "styled-components";
import ToggleOnOff from "./components/ToggleOnOff";
import ToggleList from "./components/ToggleList";

const App = () => {
  return (
    <Wrapper className="App">
      <ComponentWrapper>
        <ToggleOnOff></ToggleOnOff>
      </ComponentWrapper>
      <ComponentWrapper>
        <ToggleList></ToggleList>
      </ComponentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ComponentWrapper = styled.div`
  margin-top: 50px;
  margin-left: 50px;
`;

export default App;
