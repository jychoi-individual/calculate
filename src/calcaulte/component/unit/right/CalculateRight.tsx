// 라이브러리
import styled from "styled-components";

// 컴포넌트
import CalculateHistory from "./result/CalculateHistory";
import CalculateOperator from "./button/CalculateOperator";
import CalculateNumber from "./button/CalculateNumber";

// 스타일
import CalculateResultStyle from "../../../style/CalculateStyle";

/**
 * @desc 계산기의 오른쪽 영역 컴포넌트입니다.
 * @return {JSX.Element} 계산기의 버튼 영역 컴포넌트를 반환합니다.
 */
function CalculateRight(): JSX.Element {
  return (
    <CalculateRightDiv className="calculate__right">
      {/** 결과 출력창입니다. */}
      <CalculateTextDiv className="calculate__text">
        <CalculateHistory />
      </CalculateTextDiv>

      {/** 버튼 영역입니다. */}
      <CalcaulteButtonDiv className="calculate__btn">
        <CalculateNumber />
        <CalculateOperator />
      </CalcaulteButtonDiv>
    </CalculateRightDiv>
  );
}

export default CalculateRight;

const CalculateRightDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CalculateTextDiv = styled.div`
  ${CalculateResultStyle}
  height: 310px;
  display: flex;
  flex-direction: column;
`;

const CalcaulteButtonDiv = styled.div`
  height: calc(100% - 310px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
