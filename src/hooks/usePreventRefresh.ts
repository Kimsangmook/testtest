import React from "react";

export const usePreventRefresh = () => {
  const preventClose = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
  };

  // NOTE : 브라우저에 렌더링 시 한 번만 실행하는 코드
  React.useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();

    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  });
};
