// 라이브러리
import styled from "styled-components";

/**
 * @desc 계산기의 버튼 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 버튼 영역 컴포넌트를 반환합니다.
 */
function CalculateButton(): JSX.Element {
  return (
    <CalculateButtonDiv className="calculate__button"></CalculateButtonDiv>
  );
}

export default CalculateButton;

const CalculateButtonDiv = styled.div`
  width: 100%;
  height: 60%;
`;
