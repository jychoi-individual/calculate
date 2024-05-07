// 인터페이스
import { FileType } from "../../../common/type/commonType";

/**
 * @desc 수기 입력 영역의 창 사이즈를 Resize하는 함수를 모아놓았습니다.
 * @return {FileType} 수기 입력 영역의 창 사이즈를 Resize하는 함수를 반환합니다.
 */
function useResizeDom(): FileType {
  let y: number = 0;
  let topHeight: number = 0;

  /**
   * @desc Resizer에 마우스가 Up 되었을 때 수행합니다.
   */
  const mouseUpResizer = () => {
    // Resizer의 활성화를 제거합니다.
    changeResizer(false);

    // target dom을 가져옵니다.
    const target = document.getElementById(
      "calculateResizer"
    ) as HTMLDivElement;
    const topDom = target.previousElementSibling as HTMLDivElement;
    const bottomDom = target.nextElementSibling as HTMLDivElement;

    // top, bottom dom의 등록된 마우스 스타일을 제거합니다.
    topDom.style.removeProperty("user-select");
    topDom.style.removeProperty("pointer-events");

    bottomDom.style.removeProperty("user-select");
    bottomDom.style.removeProperty("pointer-events");

    // 등록한 마우스 이벤트를 제거합니다.
    document.removeEventListener("mousemove", mouseMoveResizer);
    document.removeEventListener("mouseup", mouseUpResizer);
  };

  /**
   * @desc Resizer에 마우스가 move 되었을 때 수행합니다.
   * @param {React.MouseEvent<HTMLDivElement> | any} event 발생한 이벤트 객체입니다.
   */
  const mouseMoveResizer = (event: React.MouseEvent<HTMLDivElement> | any) => {
    // target dom들을 가져옵니다.
    const target = document.getElementById("calculateResizer") as
      | HTMLDivElement
      | any;
    const topDom = target.previousElementSibling as HTMLDivElement;
    const bottomDom = target.nextElementSibling as HTMLDivElement;

    // 마우스가 이동한 y축 값을 계산합니다.
    const dy = event.clientY - y;

    // top, bottom dom의 마우스 이벤트 발생을 방지합니다.
    topDom.style.userSelect = "none";
    topDom.style.pointerEvents = "none";

    bottomDom.style.userSelect = "none";
    bottomDom.style.pointerEvents = "none";

    // 이동한 y값을 계산하여 top Dom에 넣습니다.
    const newTopHeight =
      ((topHeight + dy) * 100) /
      target.parentElement.getBoundingClientRect().height;
    topDom.style.height = `${newTopHeight}%`;
  };

  /**
   * @desc Resizer에 마우스가 down 되었을 때 수행합니다.
   * @param {React.MouseEvent<HTMLDivElement>} event 발생한 이벤트 객체입니다.
   */
  const mouseDownResizer = (event: React.MouseEvent<HTMLDivElement>) => {
    // Resizer를 활성화 하기 위합니다
    changeResizer(true);

    // 타켓과 top dom을 가져옵니다.
    const target = document.getElementById(
      "calculateResizer"
    ) as HTMLDivElement;
    const topDom = target.previousElementSibling as HTMLDivElement;

    // 현재 마우스와 Top Dom의 높이값을 가져옵니다.
    y = event.clientY;
    topHeight = topDom.getBoundingClientRect().height;

    // mouse move, up 이벤트를 등록합니다.
    document.addEventListener("mousemove", mouseMoveResizer);
    document.addEventListener("mouseup", mouseUpResizer);
  };

  /**
   * @desc Resizer 스타일을 변경하기 위합니다.
   * @param {boolean} isActive 활성화 여부입니다.
   */
  const changeResizer = (isActive: boolean) => {
    const target = document.getElementById(
      "calculateResizer"
    ) as HTMLDivElement;

    isActive
      ? target.classList.add("active")
      : target.classList.remove("active");
  };

  return { mouseDownResizer };
}

export default useResizeDom;
