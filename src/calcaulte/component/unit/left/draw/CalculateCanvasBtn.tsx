// 라이브러리
import styled from "styled-components";

// 컴포넌트
import Button from "../../../../../common/component/Button";

// 함수
import { colorButton } from "../../../../const/calculateButton";
import useDrawBtn from "../../../../hook/draw/useDrawBtn";

// 아이콘
import { FaCheck } from "react-icons/fa";

// 인터페이스
import { CanvasInterface } from "../../../../type/calcaulteType";

/**
 * @desc 메모의 버튼 컴포넌트입니다.
 * @param {CanvasInterface} canvas 메모 캔버스입니다.
 * @return {JSX.Element} 메모 버튼 컴포넌트를 반환합니다.
 */
function CalculateCanvasBtn({ canvas }: CanvasInterface): JSX.Element {
  const { changeColorBtn } = useDrawBtn();

  return (
    <CalculateCanvasBtnDiv className="calculate__canvas__btn">
      {/** 색상 버튼 영역입니다. */}
      <CalculateColorBtnDiv>
        {colorButton.map((el: { background: string }, idx: number) => {
          return (
            <Button
              className={
                idx === 0
                  ? "calcaulte__canvas__btn active"
                  : "calcaulte__canvas__btn"
              }
              background={el.background}
              icon={<FaCheck />}
              onClick={() => {
                changeColorBtn(canvas, el.background, idx);
              }}
              key={idx}
            />
          );
        })}
      </CalculateColorBtnDiv>
    </CalculateCanvasBtnDiv>
  );
}

export default CalculateCanvasBtn;

const CalculateCanvasBtnDiv = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
`;

const CalculateColorBtnDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
