// 라이브러리
import styled from "styled-components";

// 컴포넌트
import Button from "../../../../../common/component/Button";

// 함수
import { operatorButton } from "../../../../const/calculateButton";

/**
 * @desc 계산기에서의 기본 사칙연산 버튼 영역입니다.
 * @return {JSX.Element} 계산기에서 기본 사칙연산 버튼 영역 컴포넌트를 반환합니다.
 */
function CalculateOperator(): JSX.Element {
  return (
    <CalculateOperatorDiv className="calcaulate__operator">
      {operatorButton.map(
        (el: { background: string; icon: React.ReactElement }, idx: number) => {
          return (
            <Button
              icon={el.icon}
              className={"operate__btn"}
              background={el.background}
              key={idx}
            />
          );
        }
      )}
    </CalculateOperatorDiv>
  );
}

export default CalculateOperator;

const CalculateOperatorDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
