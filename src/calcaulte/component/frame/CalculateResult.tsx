// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateDraw from "../unit/result/CalculateDraw";
import CalculateText from "../unit/result/CalculateText";

/**
 * @desc 계산기의 결과 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 버튼 결과 컴포넌트를 반환합니다.
 */
function CalculateResult(): JSX.Element {
  return (
    <CalculateResultDiv className="calculate__result">
      <CalculateDraw />
      <CalculateText />
    </CalculateResultDiv>
  );
}

export default CalculateResult;

const CalculateResultDiv = styled.div`
  width: 100%;
  height: 310px;
  display: flex;
  gap: 10px;
`;
