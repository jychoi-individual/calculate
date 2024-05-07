// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateDraw from "./CalculateDraw";

/**
 * @desc 계산기의 결과 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 버튼 결과 컴포넌트를 반환합니다.
 */
function CalculateLeft(): JSX.Element {
  return (
    <CalculateLeftDiv className="calculate__left">
      <CalculateDraw />
    </CalculateLeftDiv>
  );
}

export default CalculateLeft;

const CalculateLeftDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
`;
