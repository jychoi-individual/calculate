// 라이브러리
import styled from "styled-components";

// 아이콘
import { FcAdvertising } from "react-icons/fc";

/**
 * @desc 계산 결과 히스토리를 출력하기 위한 컴포넌트입니다.
 * @return {JSX.Element} 계산 결과 히스토리를 출력하기 위한 컴포넌트를 반환합니다.
 */
function CalculateHistory(): JSX.Element {
  const historyList: string[] = [];

  return (
    <CalculateHistoryDiv className="calculate__history">
      {/** 해당 영역 타이틀입니다. */}
      <CalculateHistoryItem className="empth__history">
        <FcAdvertising />
        {"입력된 수식에 대한 결과가 보여집니다. 입력해주세요!"}
      </CalculateHistoryItem>

      {/** 계산 결과가 있는 경우에 수행합니다. */}
      {historyList.length !== 0 &&
        historyList.map((el: string, idx: number) => {
          return <CalculateHistoryItem key={idx}>{el}</CalculateHistoryItem>;
        })}
    </CalculateHistoryDiv>
  );
}

export default CalculateHistory;

const CalculateHistoryDiv = styled.div`
  width: 100%;
  height: calc(100% - 60px);
`;

const CalculateHistoryItem = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.theme.color.smoke};
  gap: 10px;

  svg {
    font-size: 26px;
  }
`;
