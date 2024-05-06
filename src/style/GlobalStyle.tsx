// 라이브러리
import { createGlobalStyle } from "styled-components";

// 공통으로 사용될 스타일입니다.
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "GlobalFont";
    src: url("../asset/font/Freesentation.ttf") format ('font-woff2');
  }
  
  body,
  html,
  #root {
    margin: 0;
    width: 100%;
    height: 100vh;
    overflow-y:hidden;
    font-family: GlobalFont;
    letter-spacing: 0.01rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .highlight{
    display: inline;
    box-shadow: inset 0 -7px 0 ${(props) => props.theme.color.smokeOpacity}; 
  }
`;

export default GlobalStyle;
