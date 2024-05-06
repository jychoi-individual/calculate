// 라이브러리
import { createGlobalStyle } from "styled-components";

// 공통으로 사용될 스타일입니다.
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "GlobalFont";
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2') format('woff2');
  }
  
  @font-face {
    font-family: "LogoFont";
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Giants-Inline.woff2') format('woff2');
  }

  body,
  html,
  #root {
    margin: 0;
    width: 100%;
    height: 100vh;
    overflow-y:hidden;
    overflow-x:hidden;
    font-family: GlobalFont;
    letter-spacing: 0.01rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input {
    font-family: GlobalFont;
  }

  .logo__text {
    font-family:  LogoFont;
    display: inline;
    box-shadow: inset 0 -12px 0 ${(props) => props.theme.color.smokeOpacity}; 
  }
`;

export default GlobalStyle;
