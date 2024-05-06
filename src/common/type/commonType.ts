// 라이브러리
import { IconType } from "react-icons";

// 버튼 인터페이스입니다.
export interface ButtonProps {
  text?: string;
  Icon?: IconType;
}

// hook 폴더 하위에 대한 파일 타입입니다.
export type FileType = {
  [name: string]: Function | any;
};
