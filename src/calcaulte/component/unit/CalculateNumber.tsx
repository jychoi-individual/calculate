// 라이브러리
import styled from "styled-components";

/**
 * @desc 계산기에서의 숫자 영역입니다.
 * @return {JSX.Element} 계산기에서 숫자 영역 컴포넌트를 반환합니다.
 */
function CalculateNumber(): JSX.Element {
  return (
    <CalculateNumberDiv className="calcaulate__number"></CalculateNumberDiv>
  );
}

export default CalculateNumber;

const CalculateNumberDiv = styled.div`
  width: 40%;
  height: 100%;
`;
