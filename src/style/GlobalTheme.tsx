// 스타일 타입입니다.
type ThemeStyle = {
  color: {
    [type: string]: string;
  };
  background: {
    [type: string]: string;
  };
};

// 공통적으로 사용하는 테마로 색상과 사이즈를 표기합니다.
const GlobalTheme: ThemeStyle = {
  color: {
    opacityPirmary: "#f1d0ca40",
    deepPrimary: "#e1a397",
    vividDeepPrimary: "#e98f7d",
    dark: "#333333",
    midDark: "#434343",
    deepDark: "#2d2d2d",
    shadow: "#272626",
    resize: "#2a2a2ad1",
    white: "#ffffff",
    smoke: "#eeeeee",
    smokeOpacity: "#eeeeee40",
    lightSmoke: "#e2e2e2",
    click: "#a0a0a0",
  },
  background: {
    white: "#eeeeee",
    red: "#eca192",
    orange: "#ecc092",
    yellow: "#ecdc92",
    green: "#afec92",
    blue: "#92d1ec",
    pink: "#f3aedb",
    purple: "#cc92ec",
    gray: "#8d8d8d",
    black: "#434343",
    primary: "#f1d0ca",
    vividPrimary: "#eca192",
    deepWhite: "#cac9c9",
  },
};

export default GlobalTheme;
