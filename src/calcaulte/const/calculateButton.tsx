// 스타일
import GlobalTheme from "../../style/GlobalTheme";

// 아이콘
import { FaPlus, FaMinus, FaDivide, FaTimes, FaEquals } from "react-icons/fa";

// 메모의 색상 버튼 영역입니다.
export const colorButton: { background: string }[] = [
  { background: GlobalTheme.background.white },
  { background: GlobalTheme.background.black },
  { background: GlobalTheme.background.red },
  { background: GlobalTheme.background.gray },
  { background: GlobalTheme.background.orange },
  { background: GlobalTheme.background.purple },
  { background: GlobalTheme.background.yellow },
  { background: GlobalTheme.background.pink },
  { background: GlobalTheme.background.green },
  { background: GlobalTheme.background.blue },
];

// 메모 사이즈 버튼입니다.
export const sizeButton: { size: string; background: string; text: string }[] =
  [
    {
      size: "2px",
      background: GlobalTheme.background.white,
      text: "1x",
    },
    {
      size: "4px",
      background: GlobalTheme.background.white,
      text: "2x",
    },
    {
      size: "8px",
      background: GlobalTheme.background.white,
      text: "4x",
    },
    {
      size: "16px",
      background: GlobalTheme.background.white,
      text: "8x",
    },
  ];

// 계산기의 기본 연산자 영역입니다.
export const operatorButton: {
  background: string;
  icon: React.ReactElement;
}[] = [
  { background: GlobalTheme.background.primary, icon: <FaPlus /> },
  { background: GlobalTheme.background.primary, icon: <FaMinus /> },
  { background: GlobalTheme.background.primary, icon: <FaDivide /> },
  { background: GlobalTheme.background.primary, icon: <FaTimes /> },
  { background: GlobalTheme.background.vividPrimary, icon: <FaEquals /> },
];
