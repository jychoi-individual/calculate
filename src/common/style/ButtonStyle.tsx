// 라이브러리
import { css } from "styled-components";

const deleteBtnStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.color.lightSmoke};
  box-shadow: 0 8px 7px -7px ${(props) => props.theme.color.smokeOpacity};
  padding: 0;

  &:first-child {
    svg {
      color: ${(props) => props.theme.color.dark};
      font-size: 21px;
    }
  }

  &:last-child {
    svg {
      color: ${(props) => props.theme.background.dark};
      font-size: 17px;
    }
  }

  &.active {
    box-shadow: 0 8px 7px -7px ${(props) => props.theme.color.deepPrimary};
  }
`;

const sizeBtnStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.color.lightSmoke};
  box-shadow: 0 8px 7px -7px ${(props) => props.theme.color.smokeOpacity};

  .button__text {
    font-size: 13px;
    color: ${(props) => props.theme.color.dark};
  }

  &.active {
    border: 3px solid ${(props) => props.theme.color.deepPrimary};

    .button__text {
      font-size: 13px;
      color: ${(props) => props.theme.color.deepPrimary};
      font-weight: 600;
      box-shadow: 0 8px 7px -7px ${(props) => props.theme.color.deepPrimary};
    }
  }
`;

const colorBtnStyle = css`
  width: 32px;
  height: 32px;
  border-radius: 15px;
  border: 3px solid ${(props) => props.theme.color.lightSmoke};
  box-shadow: 0 8px 7px -7px ${(props) => props.theme.color.smokeOpacity};

  svg {
    color: ${(props) => props.theme.color.smoke};
    font-size: 18px;
    display: none;
  }

  &.white__chk__btn {
    svg {
      color: ${(props) => props.theme.color.deepPrimary};
    }
  }

  &.active {
    box-shadow: 0 8px 7px -7px ${(props) => props.theme.color.deepPrimary};

    svg {
      display: block;
    }
  }
`;

const heartStyle = css`
  svg {
    font-size: 40px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const dotStyle = css`
  svg {
    font-size: 10px;
  }

  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.click};
  }
`;

const addNumberStyle = css`
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
  &:active {
    box-shadow: none;
    background: ${(props) => props.theme.color.deepPrimary};
  }

  &:last-child {
    svg {
      color: ${(props) => props.theme.color.smoke};
    }

    &:active {
      box-shadow: none;
      background: ${(props) => props.theme.color.vividDeepPrimary};
    }
  }s
`;

const ButtonStyle = css`
  border-radius: 50px;
  cursor: pointer;
  height: 90px;
  width: 110px;
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

  &.color__canvas__btn {
    ${colorBtnStyle}
  }

  &.size__canvas__btn {
    ${sizeBtnStyle}
  }

  &.delete__canvas__btn {
    ${deleteBtnStyle}
  }
`;

export default ButtonStyle;
