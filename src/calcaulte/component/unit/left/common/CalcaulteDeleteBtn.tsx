// 라이브러리
import styled from "styled-components";

// 컴포넌트
import Button from "../../../../../common/component/Button";

// 함수
import useDrawBtn from "../../../../hook/draw/useDrawBtn";

// 스타일
import {
  CalculateBtnDivStyle,
  CalculateBtnWrapperStyle,
} from "../../../../style/CalculateStyle";
import GlobalTheme from "../../../../../style/GlobalTheme";

// 아이콘
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEraser } from "react-icons/bi";

// 인터페이스
import { CanvasInterface } from "../../../../type/calcaulteType";

function CalculateDeleteBtn({ memoCanvas }: CanvasInterface): JSX.Element {
  const { deleteContextAll } = useDrawBtn();

  return (
    <DeleteBtnDiv className="delete__btn__div">
      <DeleteBtnWrapper className="delete__btn__wrapper">
        {/** 일부 삭제 버튼입니다. */}
        <Button
          className={"delete__canvas__btn size__canvas__btn"}
          background={GlobalTheme.background.white}
          icon={<BiEraser />}
          onClick={() => {}}
        />

        {/** 전체 삭제 버튼입니다. */}
        <Button
          className={"delete__canvas__btn"}
          background={GlobalTheme.background.white}
          icon={<RiDeleteBin6Line />}
          onClick={() => {
            deleteContextAll(memoCanvas);
          }}
        />
      </DeleteBtnWrapper>
    </DeleteBtnDiv>
  );
}

export default CalculateDeleteBtn;

const DeleteBtnDiv = styled.div`
  ${CalculateBtnDivStyle}
`;

const DeleteBtnWrapper = styled.div`
  ${CalculateBtnWrapperStyle}
`;
