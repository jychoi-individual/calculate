// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateMath from "../unit/button/CalculateMath";
import CalculateOperator from "../unit/button/CalculateOperator";
import CalculateNumber from "../unit/button/CalculateNumber";

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
  height: 500px;
  display: flex;
  gap: 20px;
`;
