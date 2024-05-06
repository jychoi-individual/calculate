// 라이브러리
import styled from "styled-components";

/**
 * @desc 공통 저작권 영역 컴포넌트입니다.
 * @return {JSX.Element} 공통 저작권 영역 컴포넌트를 반환합니다.
 */
function CopyRight(): JSX.Element {
  return (
    <CopyRightDiv className="copyright">
      ©Mass Class System. All rights reserved.
    </CopyRightDiv>
  );
}

export default CopyRight;

const CopyRightDiv = styled.span`
  color: ${(props) => props.theme.color.smoke};
  font-size: 16px;
`;
