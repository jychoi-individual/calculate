// 라이브러리
import styled, { css } from "styled-components";

// 인터페이스
import { ButtonProps } from "../type/commonType";

/**
 * @desc 공통 단일 버튼 컴포넌트입니다.
 * @param {string} text 버튼의 출력 문구입니다.
 * @param {React.ReactElement} icon 버튼의 출력 아이콘입니다.
 * @return {JSX.Element} 공통 단일 버튼 컴포넌트를 반환합니다.
 */
function Button({ text, icon, className }: ButtonProps): JSX.Element {
  return (
    <ButtonDiv className={`button ${className}`}>
      {text !== undefined && text}
      {icon !== undefined && <IconDiv>{icon}</IconDiv>}
    </ButtonDiv>
  );
}

export default Button;

const operateStyle = css`
  width: 120px;
  height: 90px;
  background: ${(props) => props.theme.color.primary};
  box-shadow: 1px 1px 1px 1px ${(props) => props.theme.color.btnBackground};

  svg {
    font-size: 25px;
    color: ${(props) => props.theme.color.dark};
  }

  &:last-child {
    background: ${(props) => props.theme.color.deepPrimary};

    svg {
      color: ${(props) => props.theme.color.smoke};
    }
  }
`;

const ButtonDiv = styled.button`
  border-radius: 50px;
  cursor: pointer;

  &.operate__btn {
    ${operateStyle}
  }
`;
const IconDiv = styled.div``;
