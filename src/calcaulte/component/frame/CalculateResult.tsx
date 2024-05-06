// 라이브러리
import styled from "styled-components";

/**
 * @desc 계산기의 결과 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 버튼 결과 컴포넌트를 반환합니다.
 */
function CalculateResult(): JSX.Element {
  return (
    <CalculateResultDiv className="calculate__result"></CalculateResultDiv>
  );
}

export default CalculateResult;

const CalculateResultDiv = styled.div`
  width: 100%;
  height: 30%;
  background: ${(props) => props.theme.color.deepDark};
  border-radius: 4px;
`;
