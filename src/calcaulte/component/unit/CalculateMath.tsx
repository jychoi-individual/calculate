// 라이브러리
import styled from "styled-components";

/**
 * @desc 계산기에서 수학 공식 버튼 영역입니다.
 * @return {JSX.Element} 계산기에서 수학 공식 버튼 영역 컴포넌트를 반환합니다.
 */
function CalculateMath(): JSX.Element {
  return <CalculateMathDiv className="calcaulate__math"></CalculateMathDiv>;
}

export default CalculateMath;

const CalculateMathDiv = styled.div`
  width: 60%;
  height: 100%;
`;
