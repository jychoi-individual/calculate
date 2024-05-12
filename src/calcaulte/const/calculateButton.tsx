// 스타일
import GlobalTheme from "../../style/GlobalTheme";

// 아이콘
import { FaPlus, FaMinus, FaDivide, FaTimes, FaEquals } from "react-icons/fa";

// 메모의 색상 버튼 영역입니다.
export const colorButton = [
  { background: GlobalTheme.background.white },
  { background: GlobalTheme.background.red },
  { background: GlobalTheme.background.orange },
  { background: GlobalTheme.background.yellow },
  { background: GlobalTheme.background.green },
  { background: GlobalTheme.background.blue },
  { background: GlobalTheme.background.pink },
  { background: GlobalTheme.background.purple },
  { background: GlobalTheme.background.gray },
  { background: GlobalTheme.background.black },
];

// 계산기의 기본 연산자 영역입니다.
export const operatorButton = [
  { background: GlobalTheme.background.primary, icon: <FaPlus /> },
  { background: GlobalTheme.background.primary, icon: <FaMinus /> },
  { background: GlobalTheme.background.primary, icon: <FaDivide /> },
  { background: GlobalTheme.background.primary, icon: <FaTimes /> },
  { background: GlobalTheme.background.vividPrimary, icon: <FaEquals /> },
];
