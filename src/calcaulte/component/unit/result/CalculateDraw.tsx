// 라이브러리
import styled from "styled-components";

// 스타일
import CalculateResultStyle from "../../../style/CalculateStyle";

/**
 * @desc 계산 값을 수기로 입력하기 위한 컴포넌트 틀입니다.
 * @return {JSX.Element} 계산 값을 수기로 입력하기 위한 컴포넌트 틀을 반환합니다.
 */
function CalculateDraw(): JSX.Element {
  return <CalculateDrawDiv className="calculate__draw"></CalculateDrawDiv>;
}

export default CalculateDraw;

const CalculateDrawDiv = styled.div`
  ${CalculateResultStyle}
`;
