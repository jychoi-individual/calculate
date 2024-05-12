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
 * @param {string} className 버튼의 커스텀 class입니다.
 * @param {string} background 버튼의 배경색입니다.
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} onClick 버튼의 클릭 함수입니다.
 * @return {JSX.Element} 공통 단일 버튼 컴포넌트를 반환합니다.
 */
function Button({
  text,
  icon,
  className,
  background,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <ButtonDiv
      className={`button ${className}`}
      $background={background}
      onClick={onClick}
    >
      {text !== undefined && text}
      {icon !== undefined && <IconDiv className="button__icon">{icon}</IconDiv>}
    </ButtonDiv>
  );
}

export default Button;

const ButtonDiv = styled.button<{ $background: string }>`
  background: ${(props) => props.$background};
  ${ButtonStyle}
`;

const IconDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
