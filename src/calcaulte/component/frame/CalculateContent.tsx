// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateLeft from "../unit/left/CalculateLeft";
import CalculateRight from "../unit/right/CalculateRight";

/**
 * @desc 계산기의 content 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 content 영역 컴포넌트를 반환합니다.
 */
function CalculateContent(): JSX.Element {
  return (
    <CalculateContentDiv className="calculate__content">
      <CalculateLeft />
      <CalculateRight />
    </CalculateContentDiv>
  );
}

export default CalculateContent;

const CalculateContentDiv = styled.div`
  height: calc(100% - 100px);
  padding: 10px 20px 0px 20px;
  display: flex;
  gap: 10px;
`;
