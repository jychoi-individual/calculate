// 라이브러리
import styled from "styled-components";

// 컴포넌트
import Button from "../../../../../common/component/Button";

// 함수
import { sizeButton } from "../../../../const/calculateButton";
import useDrawBtn from "../../../../hook/draw/useDrawBtn";

// 스타일
import {
  CalculateBtnDivStyle,
  CalculateBtnWrapperStyle,
} from "../../../../style/CalculateStyle";

// 인터페이스
import { CanvasInterface } from "../../../../type/calcaulteType";

/**
 * @desc 캔버스의 사이즈 버튼 관련 컴포넌트입니다.
 * @param {React.RefObject<HTMLCanvasElement>} memoCanvas 메모장 캔버스입니다.
 * @return {JSX.Element} 캔버스의 사이즈 버튼 관련 컴포넌트를 반환합니다.
 */
function CalculateSizeBtn({ memoCanvas }: CanvasInterface): JSX.Element {
  const { changeSizeBtn } = useDrawBtn();

  return (
    <SizeBtnDiv className="size__btn__div">
      {sizeButton.map(
        (
          el: { size: string; background: string; text: string },
          idx: number
        ) => {
          return (
            // 1 * 2 형태로 표출하기 위해 조건을 추가했습니다.
            idx % 2 === 0 && (
              <SizeBtnWrapper key={idx} className="size__btn__wrapper">
                {/** 짝수 번 버튼입니다. */}
                <Button
                  className={
                    idx === 0 ? "size__canvas__btn active" : "size__canvas__btn"
                  }
                  background={el.background}
                  text={el.text}
                  onClick={() => {
                    changeSizeBtn(memoCanvas, el.size, idx);
                  }}
                />

                {/** 홀수번 번 버튼입니다. */}
                <Button
                  className={"size__canvas__btn"}
                  background={sizeButton[idx + 1].background}
                  text={sizeButton[idx + 1].text}
                  onClick={() => {
                    changeSizeBtn(
                      memoCanvas,
                      sizeButton[idx + 1].size,
                      idx + 1
                    );
                  }}
                />
              </SizeBtnWrapper>
            )
          );
        }
      )}
    </SizeBtnDiv>
  );
}

export default CalculateSizeBtn;

const SizeBtnDiv = styled.div`
  ${CalculateBtnDivStyle}
`;

const SizeBtnWrapper = styled.div`
  ${CalculateBtnWrapperStyle}
`;
