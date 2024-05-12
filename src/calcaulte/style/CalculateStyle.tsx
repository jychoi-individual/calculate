// 라이브러리
import { css } from "styled-components";

// calculate 틀 관련 스타일입니다.
export const CalculateResultStyle = css`
  width: 100%;
  background: ${(props) => props.theme.color.deepDark};
  border-radius: 4px;
`;

// calculate 아이템 관련 스타일입니다.
export const CalculateItemStyle = css`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.theme.color.smoke};
  gap: 10px;

  svg {
    font-size: 26px;
  }
`;
