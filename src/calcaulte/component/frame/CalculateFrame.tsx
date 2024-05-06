// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateHeader from "./CalculateHeader";
import CalculateResult from "./CalculateResult";
import CalculateButton from "./CalculateButton";
import CalculateFooter from "./CalculateFooter";

/**
 * @desc 계산기의 기본 틀 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 기본 틀 컴포넌트를 반환합니다.
 */
function CalcaulteFrame(): JSX.Element {
  return (
    <CalcaulteFrameDiv className="calculate__frame">
      <CalculateHeader />
      <CalculateResult />
      <CalculateButton />
      <CalculateFooter />
    </CalcaulteFrameDiv>
  );
}

export default CalcaulteFrame;

const CalcaulteFrameDiv = styled.div`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  padding: 20px;
  background: ${(props) => props.theme.color.dark};
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
