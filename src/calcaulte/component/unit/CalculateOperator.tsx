// 라이브러리
import styled from "styled-components";

// 컴포넌트
import Button from "../../../common/component/Button";

// 아이콘
import { FaPlus, FaMinus, FaDivide, FaTimes, FaEquals } from "react-icons/fa";

/**
 * @desc 계산기에서의 기본 사칙연산 버튼 영역입니다.
 * @return {JSX.Element} 계산기에서 기본 사칙연산 버튼 영역 컴포넌트를 반환합니다.
 */
function CalculateOperator(): JSX.Element {
  return (
    <CalculateOperatorDiv className="calcaulate__operator">
      <Button icon={<FaPlus />} className={"operate__btn"} />
      <Button icon={<FaMinus />} className={"operate__btn"} />
      <Button icon={<FaTimes />} className={"operate__btn"} />
      <Button icon={<FaDivide />} className={"operate__btn"} />
      <Button icon={<FaEquals />} className={"operate__btn"} />
    </CalculateOperatorDiv>
  );
}

export default CalculateOperator;

const CalculateOperatorDiv = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;
