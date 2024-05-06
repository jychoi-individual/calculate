// 라이브러리
import { css } from "styled-components";

const heartStyle = css`
  background: ${(props) => props.theme.color.deepSmoke};
  width: 33%;

  svg {
    font-size: 40px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const dotStyle = css`
  background: ${(props) => props.theme.color.deepSmoke};
  width: 33%;

  svg {
    font-size: 10px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const addNumberStyle = css`
  background: ${(props) => props.theme.color.deepSmoke};
  width: 33%;

  svg {
    font-size: 28px;
    stroke-width: 10px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const numberStyle = css`
  background: ${(props) => props.theme.color.smoke};
  width: 33%;

  svg {
    font-size: 28px;
    stroke-width: 10px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const operateStyle = css`
  background: ${(props) => props.theme.color.primary};
  width: 100%;

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.deepPrimary};
  }

  &:last-child {
    background: ${(props) => props.theme.color.vividPrimary};

    svg {
      color: ${(props) => props.theme.color.smoke};
    }

    &:active {
      box-shadow: none;
      background: ${(props) => props.theme.color.vividDeepPrimary};
    }
  }
`;

const ButtonStyle = css`
  border-radius: 50px;
  cursor: pointer;
  height: 90px;
  box-shadow: 1px 1px 1px 1px ${(props) => props.theme.color.shadow};
  transition-duration: 0.3s;

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
