// 라이브러리
import styled from "styled-components";

// 인터페이스
import { ButtonProps } from "../type/commonType";

/**
 * @desc 공통 단일 버튼 컴포넌트입니다.
 * @param {string} text 버튼의 출력 문구입니다.
 * @param {IconType} Icon 버튼의 출력 아이콘입니다.
 * @return {JSX.Element} 공통 단일 버튼 컴포넌트를 반환합니다.
 */
function Button({ text, Icon }: ButtonProps): JSX.Element {
  return (
    <ButtonDiv className="button">
      {text !== undefined && text}
      {Icon !== undefined && <Icon />}
    </ButtonDiv>
  );
}

export default Button;

const ButtonDiv = styled.button``;
