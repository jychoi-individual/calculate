// 라이브러리
import { css } from "styled-components";

const heartStyle = css`
  background: ${(props) => props.theme.color.deepSmoke};

  svg {
    font-size: 40px;
  }
`;

const dotStyle = css`
  background: ${(props) => props.theme.color.deepSmoke};

  svg {
    font-size: 10px;
  }
`;

const addNumberStyle = css`
  background: ${(props) => props.theme.color.deepSmoke};

  svg {
    font-size: 28px;
    stroke-width: 10px;
  }
`;

const numberStyle = css`
  background: ${(props) => props.theme.color.smoke};
  svg {
    font-size: 28px;
    stroke-width: 10px;
  }
`;

const operateStyle = css`
  background: ${(props) => props.theme.color.primary};

  &:last-child {
    background: ${(props) => props.theme.color.vividPrimary};

    svg {
      color: ${(props) => props.theme.color.smoke};
    }
  }
`;

const ButtonStyle = css`
  border-radius: 50px;
  cursor: pointer;
  width: 120px;
  height: 90px;
  box-shadow: 1px 1px 1px 1px ${(props) => props.theme.color.shadow};

  svg {
    font-size: 25px;
    color: ${(props) => props.theme.color.dark};
  }

  &.operate__btn {
    ${operateStyle}
  }

  &.number__btn {
    ${numberStyle}
  }

  &.add__number__btn {
    ${addNumberStyle}
  }

  &.add__dot__btn {
    ${dotStyle}
  }

  &.heart__btn {
    ${heartStyle}
  }
`;

export default ButtonStyle;
