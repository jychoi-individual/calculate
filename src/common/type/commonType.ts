// 버튼 인터페이스입니다.
export interface ButtonProps {
  text?: string;
  icon?: React.ReactElement;
  className?: string;
}

// hook 폴더 하위에 대한 파일 타입입니다.
export type FileType = {
  [name: string]: Function | any;
};
