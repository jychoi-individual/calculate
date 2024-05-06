// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateHistory from "./CalculateHistory";
import CalcaulteInput from "./CalcaulteInput";

// 스타일
import CalculateResultStyle from "../../../style/CalculateStyle";

/**
 * @desc 계산 히스토리 및 입력창 틀 컴포넌트 틀입니다.
 * @return {JSX.Element} 계산 히스토리 및 입력창 틀 컴포넌트를 반환합니다.
 */
function CalculateText(): JSX.Element {
  return (
    <CalculateTextDiv className="calculate__text">
      <CalculateHistory />
      <CalcaulteInput />
    </CalculateTextDiv>
  );
}

export default CalculateText;

const CalculateTextDiv = styled.div`
  ${CalculateResultStyle}
  display: flex;
  flex-direction: column;
`;
