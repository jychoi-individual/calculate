// 라이브러리
import { useState } from "react";

// 인터페이스
import { FileType } from "../../../common/type/commonType";

/**
 * @desc 메모 영역에서 이벤트가 발생했을 때 수행합니다.
 * @return {FileType} 메모 영역에서 초기 설정을 위한 함수를 반환합니다.
 */
function useDrawCanvas(): FileType {
  const [isDown, setIsDown] = useState<boolean>(false);

  /**
   * @desc 메모 영역의 마우스가 Move 되었을 때 수행합니다
   * @param {React.MouseEvent<HTMLCanvasElement>} event 발생한 이벤트입니다.
   */
  const mouseUpCanvas = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const target = event.target as HTMLCanvasElement;
    const context = target.getContext("2d") as CanvasRenderingContext2D;
    context !== null && context.closePath(); //시작 및 도착점을 연결하여 형상을 추가하기 위합니다.

    setIsDown(false);
  };

  /**
   * @desc 메모 영역의 마우스가 Move 되었을 때 수행합니다
   * @param {React.MouseEvent<HTMLCanvasElement>} event 발생한 이벤트입니다.
   */
  const mouseMoveCanvas = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDown) {
      const { offsetX, offsetY }: { offsetX: number; offsetY: number } =
        event.nativeEvent;
      const target = event.target as HTMLCanvasElement;
      const context = target.getContext("2d") as CanvasRenderingContext2D;

      if (context !== null) {
        context.lineTo(offsetX, offsetY); // 도착점 좌표를 옮깁니다.
        context.stroke(); // Draw를 실행합니다.
      }
    }
  };

  /**
   * @desc 메모 영역의 마우스가 Down되었을 때 수행합니다
   * @param {React.MouseEvent<HTMLCanvasElement>} event 발생한 이벤트입니다.
   */
  const mouseDownCanvas = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDown(true);

    const { offsetX, offsetY }: { offsetX: number; offsetY: number } =
      event.nativeEvent;
    const target = event.target as HTMLCanvasElement;
    const context = target.getContext("2d") as CanvasRenderingContext2D;

    if (context !== null) {
      context.beginPath(); // 출발 점을 초기화합니다.
      context.moveTo(offsetX, offsetY); // 출발점 좌표를 이동합니다.
    }
  };

  return { mouseDownCanvas, mouseMoveCanvas, mouseUpCanvas };
}

export default useDrawCanvas;
