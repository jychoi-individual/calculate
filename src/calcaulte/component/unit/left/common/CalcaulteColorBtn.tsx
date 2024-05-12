// 라이브러리
import styled from "styled-components";

// 컴포넌트
import Button from "../../../../../common/component/Button";

// 함수
import { colorButton } from "../../../../const/calculateButton";
import useDrawBtn from "../../../../hook/draw/useDrawBtn";

// 아이콘
import { FaCheck } from "react-icons/fa";

// 스타일
import {
  CalculateBtnDivStyle,
  CalculateBtnWrapperStyle,
} from "../../../../style/CalculateStyle";

// 인터페이스
import { CanvasInterface } from "../../../../type/calcaulteType";

/**
 * @desc 캔버스의 색상 버튼 관련 컴포넌트입니다.
 * @param {React.RefObject<HTMLCanvasElement>} memoCanvas 메모장 캔버스입니다.
 * @return {JSX.Element} 캔버스의 색상 버튼 관련 컴포넌트를 반환합니다.
 */
function CalcaulteColorBtn({ memoCanvas }: CanvasInterface): JSX.Element {
  const { changeColorBtn } = useDrawBtn();

  return (
    <ColorBtnDiv className="color__btn__div">
      {colorButton.map((el: { background: string }, idx: number) => {
        return (
          // 1 * 2 형태로 표출하기 위해 조건을 추가했습니다.
          idx % 2 === 0 && (
            <ColorBtnWrapper key={idx} className="color__btn__wrapper">
              {/** 짝수 번 버튼입니다. */}
              <Button
                className={
                  idx === 0
                    ? "color__canvas__btn white__chk__btn active"
                    : "color__canvas__btn"
                }
                background={el.background}
                icon={<FaCheck />}
                onClick={() => {
                  changeColorBtn(memoCanvas, el.background, idx);
                }}
              />

              {/** 홀수번 번 버튼입니다. */}
              <Button
                className={"color__canvas__btn"}
                background={colorButton[idx + 1].background}
                icon={<FaCheck />}
                onClick={() => {
                  changeColorBtn(
                    memoCanvas,
                    colorButton[idx + 1].background,
                    idx + 1
                  );
                }}
              />
            </ColorBtnWrapper>
          )
        );
      })}
    </ColorBtnDiv>
  );
}

export default CalcaulteColorBtn;

const ColorBtnDiv = styled.div`
  ${CalculateBtnDivStyle}
`;

const ColorBtnWrapper = styled.div`
  ${CalculateBtnWrapperStyle}
`;
