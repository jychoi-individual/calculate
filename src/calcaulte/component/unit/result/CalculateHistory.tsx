// 라이브러리
import styled from "styled-components";

// 아이콘
import { FcAdvertising } from "react-icons/fc";

/**
 * @desc 계산 히스토리를 출력하기 위한 컴포넌트입니다.
 * @return {JSX.Element} 계산 히스토리를 출력하기 위한 컴포넌트를 반환합니다.
 */
function CalculateHistory(): JSX.Element {
  const historyList: string[] = [];

  return (
    <CalculateHistoryDiv className="calculate__history">
      {/** 히스토리가 존재하는 경우 출력합니다. */}
      {historyList.length !== 0 ? (
        historyList.map((el: string, idx: number) => {
          return <CalculateHistoryItem key={idx}>{el}</CalculateHistoryItem>;
        })
      ) : (
        // 히스토리가 없는 경우 출력합니다.
        <CalculateHistoryItem className="empth__history">
          <FcAdvertising />
          {"이전 기록이 없습니다. 새로운 계산을 해주세요!"}
        </CalculateHistoryItem>
      )}
    </CalculateHistoryDiv>
  );
}

export default CalculateHistory;

const CalculateHistoryDiv = styled.div`
  width: 100%;
  height: calc(100% - 60px);
`;

const CalculateHistoryItem = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
  text-align: right;
  justify-content: flex-end;
  color: ${(props) => props.theme.color.smoke};
  gap: 10px;

  &.empth__history {
    svg {
      font-size: 26px;
    }
  }
`;
