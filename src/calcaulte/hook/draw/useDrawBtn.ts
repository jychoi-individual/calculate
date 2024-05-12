// 인터페이스
import { FileType } from "../../../common/type/commonType";

/**
 * @desc 메모 영역에서 버튼 관련 이벤트가 발생했을 때 수행합니다.
 * @return {FileType} 메모 영역에서 버튼 이벤트 관련 함수를 반환합니다.
 */
function useDrawBtn(): FileType {
  /**
   * @desc 캔버스의 그리기 색상을 변경합니다.
   * @param {React.RefObject<HTMLCanvasElement>} canvas 메모 캔버스입니다.
   * @param {string} background 변경할 색상입니다.
   */
  const changeContextColor = (
    canvas: React.RefObject<HTMLCanvasElement>,
    background: string
  ) => {
    if (canvas.current !== null) {
      const context = canvas.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      context.strokeStyle = background;
    }
  };

  /**
   * @desc 캔버스의 그리기 사이즈를 변경합니다.
   * @param {React.RefObject<HTMLCanvasElement>} canvas 메모 캔버스입니다.
   * @param {string} size 변경할 사이즈입니다.
   */
  const changeContextSize = (
    canvas: React.RefObject<HTMLCanvasElement>,
    size: string
  ) => {
    if (canvas.current !== null) {
      const context = canvas.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      context.lineWidth = parseInt(size.split("px")[0]);
    }
  };

  /**
   * @desc 버튼의 활성화 변경을 수행합니다.
   * @param {number} idx 클릭된 버튼의 index입니다.
   * @param {string} className 변경할 Dom의 클래스 명칭입니다.
   */
  const changeActive = (idx: number, className: string) => {
    const buttonDom = Array.from(document.getElementsByClassName(className));

    buttonDom !== null &&
      buttonDom.forEach((btn: Element, subIdx: number) => {
        btn.classList.remove("active");
        idx === subIdx && btn.classList.add("active");
      });
  };

  /**
   * @desc 색상 버튼이 클릭되었을 때 수행합니다.
   * @param {React.RefObject<HTMLCanvasElement>} canvas 메모 캔버스입니다.
   * @param {string} background 변경할 색상입니다.
   * @param {number} idx 클릭된 버튼의 index입니다.
   */
  const changeColorBtn = (
    canvas: React.RefObject<HTMLCanvasElement>,
    background: string,
    idx: number
  ) => {
    changeActive(idx, "color__canvas__btn");
    changeContextColor(canvas, background);
  };

  /**
   * @desc 사이즈 버튼이 클릭되었을 때 수행합니다.
   * @param {React.RefObject<HTMLCanvasElement>} canvas 메모 캔버스입니다.
   * @param {string} size 변경할 사이즈입니다.
   * @param {number} idx 클릭된 버튼의 index입니다.
   */
  const changeSizeBtn = (
    canvas: React.RefObject<HTMLCanvasElement>,
    size: string,
    idx: number
  ) => {
    changeActive(idx, "size__canvas__btn");
    changeContextSize(canvas, size);
  };

  return { changeColorBtn, changeSizeBtn };
}

export default useDrawBtn;
