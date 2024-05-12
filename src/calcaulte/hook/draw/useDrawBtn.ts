// 인터페이스
import { FileType } from "../../../common/type/commonType";

/**
 * @desc 메모 영역에서 버튼 관련 이벤트가 발생했을 때 수행합니다.
 * @return {FileType} 메모 영역에서 버튼 이벤트 관련 함수를 반환합니다.
 */
function useDrawBtn(): FileType {
  /**
   * @desc 캔버스의 그리기 색상을 변경합니다.
   * @param {string} background 변경할 색상입니다.
   * @param {number} idx 클릭된 버튼의 index입니다.
   */
  const changeContext = (
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
   * @desc 버튼의 활성화 변경을 수행합니다.
   * @param {number} idx 클릭된 버튼의 index입니다.
   */
  const changeActive = (idx: number) => {
    const buttonDom = Array.from(
      document.getElementsByClassName("calcaulte__canvas__btn")
    );

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
    changeActive(idx);
    changeContext(canvas, background);
  };

  return { changeColorBtn };
}

export default useDrawBtn;
