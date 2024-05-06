// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CopyRight from "../../../common/component/CopyRight";

/**
 * @desc 계산기의 Footer 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 Footer 영역 컴포넌트를 반환합니다.
 */
function CalculateFooter(): JSX.Element {
  return (
    <CalculateFooterDiv className="calculate__footer">
      <CopyRight />
    </CalculateFooterDiv>
  );
}

export default CalculateFooter;

const CalculateFooterDiv = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
