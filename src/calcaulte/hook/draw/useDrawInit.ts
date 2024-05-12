// 인터페이스
import { FileType } from "../../../common/type/commonType";

/**
 * @desc 메모 영역에서 초기 설정을 위한 함수를 모아놓았습니다.
 * @return {FileType} 메모 영역에서 초기 설정을 위한 함수를 반환합니다.
 */
function useDrawInit(): FileType {
  /**
   * @desc context를 설정하기 위합니다.
   * @param {CanvasRenderingContext2D} context context 객체입니다.
   */
  const changeContext = (context: CanvasRenderingContext2D) => {
    const pixel = window.devicePixelRatio > 1 ? 2 : 1;
    context.scale(pixel, pixel);
    context.lineCap = "round";
    context.strokeStyle = "#eeeeee";
    context.lineWidth = 2;
  };

  /**
   * @desc 메모 캔버스의 창 사이즈를 설정하기 위합니다.
   * @param {React.RefObject<HTMLCanvasElement>} canvas 메모를 적을 캔버스입니다.
   */
  const canvasSizeSetting = (canvas: React.RefObject<HTMLCanvasElement>) => {
    if (canvas.current !== null) {
      const width = canvas.current.clientWidth;
      const height = canvas.current.clientHeight;
      const pixel = window.devicePixelRatio > 1 ? 2 : 1;

      const resultWidth = width * pixel;
      const resultHeight = height * pixel;

      canvas.current.width = resultWidth;
      canvas.current.height = resultHeight;
    }
  };

  /**
   * @desc 메모 캔버스의 창 사이즈 및 context를 설정하기 위합니다.
   * @param {React.RefObject<HTMLCanvasElement>} canvas 메모를 적을 캔버스입니다.
   */
  const initCanvasSetting = (canvas: React.RefObject<HTMLCanvasElement>) => {
    if (canvas.current) {
      // 사이즈를 설정합니다.
      canvasSizeSetting(canvas);

      // context를 설정합니다.
      const context = canvas.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      context !== null && changeContext(context);
    }
  };

  return { initCanvasSetting };
}

export default useDrawInit;
