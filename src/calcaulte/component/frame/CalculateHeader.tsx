// 라이브러리
import styled from "styled-components";

// 컴포넌트
import Logo from "../../../common/component/Logo";

/**
 * @desc 계산기의 Header 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 Header 영역 컴포넌트를 반환합니다.
 */
function CalculateHeader(): JSX.Element {
  return (
    <CalculateHeaderDiv className="calculate__header">
      <Logo />
    </CalculateHeaderDiv>
  );
}

export default CalculateHeader;

const CalculateHeaderDiv = styled.div`
  width: 100%;
  height: 40px;
`;
