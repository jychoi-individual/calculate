// 라이브러리
import styled from "styled-components";

// 함수
import useCommon from "../hook/useCommon";

// 아이콘
import { BiMath } from "react-icons/bi";

/**
 * @desc 공통 로고 영역 컴포넌트입니다.
 * @return {JSX.Element} 공통 로고 영역 컴포넌트를 반환합니다.
 */
function Logo(): JSX.Element {
  const { clickLogo } = useCommon();

  return (
    <LogoDiv className="logo" onClick={clickLogo}>
      {/** 로고의 아이콘 영역입니다. */}
      <LogoIcon>
        <BiMath />
      </LogoIcon>

      {/** 로고의 문구 영역입니다. */}
      <LogoText className="logo__text highlight">{"MASS CLASS"}</LogoText>
    </LogoDiv>
  );
}

export default Logo;

const LogoDiv = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  cursor: pointer;
  color: ${(props) => props.theme.color.smoke};
  gap: 8px;
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
  }
`;

const LogoText = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
