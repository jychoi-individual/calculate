// 라이브러리
import styled from "styled-components";
import { useEffect } from "react";

// 함수
import useDrawCanvas from "../../../../hook/draw/useDrawCanvas";
import useDrawInit from "../../../../hook/draw/useDrawInit";

// 아이콘
import { FcEditImage } from "react-icons/fc";

// 스타일
import { CalculateItemStyle } from "../../../../style/CalculateStyle";

// 인터페이스
import { CanvasInterface } from "../../../../type/calcaulteType";

/**
 * @desc 메모 출력 컴포넌트입니다.
 * @param {React.RefObject<HTMLCanvasElement>} memoCanvas 메모장 캔버스입니다.
 * @return {JSX.Element} 메모 출력 컴포넌트를 반환합니다.
 */
function CalculateCanvas({ memoCanvas }: CanvasInterface): JSX.Element {
  const { initCanvasSetting } = useDrawInit();
  const { mouseDownCanvas, mouseMoveCanvas, mouseUpCanvas } = useDrawCanvas();

  // 최초로 실행되었을 때, 창 크기 변경 및 설정을 위해 수행합니다.
  useEffect(() => {
    // 캔버스 사이즈가 변경되면, 기존의 값이 지워집니다.
    initCanvasSetting(memoCanvas);
    // eslint-disable-next-line
  }, []);

  return (
    <CanvasFrameDiv className="calcaulte__canvas__frame">
      {/** 캔버스의 타이틀 영역입니다. */}
      <CanvasTitleDiv className="calculate__canvas__title">
        <FcEditImage />
        {"자유롭게 메모해보세요."}
      </CanvasTitleDiv>

      {/** 캔버스의 영역입니다. */}
      <CanvasDiv
        ref={memoCanvas}
        className="calculate__canvas"
        onMouseDown={mouseDownCanvas}
        onMouseMove={mouseMoveCanvas}
        onMouseUp={mouseUpCanvas}
      />
    </CanvasFrameDiv>
  );
}

export default CalculateCanvas;

const CanvasFrameDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const CanvasTitleDiv = styled.div`
  ${CalculateItemStyle}
  position: absolute;
`;

const CanvasDiv = styled.canvas`
  width: 100%;
  height: 100%;
`;
