// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateMath from "../unit/CalculateMath";
import CalculateOperator from "../unit/CalculateOperator";
import CalculateNumber from "../unit/CalculateNumber";

/**
 * @desc 계산기의 버튼 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 버튼 영역 컴포넌트를 반환합니다.
 */
function CalculateButton(): JSX.Element {
  return (
    <CalculateButtonDiv className="calculate__button">
      <CalculateMath />
      <CalculateNumber />
      <CalculateOperator />
    </CalculateButtonDiv>
  );
}

export default CalculateButton;

const CalculateButtonDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  gap: 10px;
`;
