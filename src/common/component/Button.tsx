// 라이브러리
import styled from "styled-components";

// 인터페이스
import { ButtonProps } from "../type/commonType";

// 스타일
import ButtonStyle from "../style/ButtonStyle";

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

const ButtonDiv = styled.button`
  ${ButtonStyle}
`;

const IconDiv = styled.div``;
