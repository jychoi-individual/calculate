// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateCanvas from "./draw/CalculateCanvas";

// 함수
import useResizeDom from "../../../hook/common/useResizeDom";

// 스타일
import CalculateResultStyle from "../../../style/CalculateStyle";

/**
 * @desc 계산기의 수식 수기 입력 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 수식 수기 입력 컴포넌트를 반환합니다.
 */
function CalculateLeft(): JSX.Element {
  const { mouseDownResizer } = useResizeDom();

  return (
    <CalculateLeftDiv className="calculate__left">
      {/** 자유롭게 사용할 수 있는 메모 영역입니다. */}
      <CalculateMemoDiv className="calculate__memo">
        <CalculateCanvas />
      </CalculateMemoDiv>

      {/** 창 사이즈를 변경할 수 있는 영역입니다. */}
      <CalculateResizer
        className="calculate__resizer"
        id="calculateResizer"
        onMouseDown={mouseDownResizer}
      />

      {/** 결과창에 등록할 수식을 입력하는 영역입니다. */}
      <CalculateAnswerDiv className="calculate__answer"></CalculateAnswerDiv>
    </CalculateLeftDiv>
  );
}

export default CalculateLeft;

const CalculateLeftDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CalculateMemoDiv = styled.div`
  ${CalculateResultStyle}
  height: 50%;
`;

const CalculateAnswerDiv = styled.div`
  ${CalculateResultStyle}
  flex: 1;
`;

const CalculateResizer = styled.div`
  height: 8px;
  transition: height 0.2s ease-in;
  cursor: row-resize;

  &.active {
    height: 13px;
  }
`;
