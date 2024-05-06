// 라이브러리
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 컴포넌트
import CalcaulteFrame from "./calcaulte/component/CalculateFrame";

/**
 * @desc path별로 컴포넌트를 렌더링하기 위합니다.
 * @return {JSX.Element} path별로 컴포넌트를 렌더링하기 위한 컴포넌트를 반환합니다.
 */
function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        {/** calculate 경로로 진입한 경우입니다. */}
        <Route path="/calculate" element={<CalcaulteFrame />} />

        {/** 그 외의 경로로 진입한 경우입니다. */}
        <Route path="/*" element={<Navigate to="/calculate" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
