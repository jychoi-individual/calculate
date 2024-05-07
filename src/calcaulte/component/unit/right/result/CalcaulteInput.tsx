// 라이브러리
import styled from "styled-components";

// 함수
import useCalculateDom from "../../../../hook/useCalculateDom";

// 아이콘
import { IoSearchOutline } from "react-icons/io5";

/**
 * @desc 계산 값을 입력하기 위한 컴포넌트입니다.
 * @return {JSX.Element} 계산 값을 입력하기 위한 컴포넌트를 반환합니다.
 */
function CalcaulteInput(): JSX.Element {
  const { addInputFocus, removeInputFocus } = useCalculateDom();

  return (
    <CalculateInputDiv className="calculate__input__div">
      {/** 계산값을 입력하는 input 영역입니다. */}
      <CalculateInput
        className="calculate__input"
        placeholder="계산할 내용을 입력해주세요!"
        onFocus={addInputFocus}
        onBlur={removeInputFocus}
      />

      {/** 검색을 수행하는 돋보기 아이콘입니다. */}
      <CalculateInputIcon>
        <IoSearchOutline />
      </CalculateInputIcon>
    </CalculateInputDiv>
  );
}

export default CalcaulteInput;

const CalculateInputDiv = styled.div`
  display: flex;
  padding: 10px 25px;
  margin: 20px;
  border-bottom: 3px solid ${(props) => props.theme.color.midDark};

  &.focus {
    outline: none;
    border-bottom: 3px solid ${(props) => props.theme.color.smoke};
    margin: 20px;
    box-shadow: 0 10px 7px -7px ${(props) => props.theme.color.opacityPirmary};
  }
`;

const CalculateInput = styled.input`
  width: 100%;
  background: none;
  border: none;
  font-size: 20px;
  color: ${(props) => props.theme.color.smoke};

  &:focus {
    outline: none;
  }
`;

const CalculateInputIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 26px;
    color: ${(props) => props.theme.color.smokeOpacity};
  }
`;
