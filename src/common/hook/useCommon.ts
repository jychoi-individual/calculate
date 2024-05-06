// 인터페이스
import { FileType } from "../type/commonType";

/**
 * @desc 시스템에서 사용하는 공통 함수를 모아놓았습니다.
 * @return {FileType} 시스템에서 사용하는 공통 함수를 반환합니다.
 */
function useCommon(): FileType {
  /**
   * @desc 로고를 클릭했을 때 수행합니다.
   */
  const clickLogo = () => {
    const origin = window.location.origin;
    window.location.href = `${origin}/calculate`;
  };

  return { clickLogo };
}

export default useCommon;
