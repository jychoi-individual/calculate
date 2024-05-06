// 인터페이스
import { FileType } from "../../common/type/commonType";

/**
 * @desc 계산 컴포넌트의 Dom을 제어하기 위한 함수를 모아놓았습니다.
 * @return {FileType} 계산 컴포넌트의 Dom을 제어하기 위한 함수를 반환합니다.
 */
function useCalculateDom(): FileType {
  /**
   * @desc Focus 클래스를 제거하기 위합니다.
   */
  const removeInputFocus = () => {
    const dom = document.getElementsByClassName(
      "calculate__input__div"
    )[0] as HTMLDivElement;
    dom.classList.contains("focus") && dom.classList.remove("focus");
  };

  /**
   * @desc Focus 클래스를 추가하기 위합니다.
   */
  const addInputFocus = () => {
    const dom = document.getElementsByClassName(
      "calculate__input__div"
    )[0] as HTMLDivElement;
    !dom.classList.contains("focus") && dom.classList.add("focus");
  };

  return { addInputFocus, removeInputFocus };
}

export default useCalculateDom;
