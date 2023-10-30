import React from "react";

// NOTE : 뒤로가기 막는 hooks
export const usePreventGoBack = () => {
  const preventGoBack = () => {
    history.pushState(null, "", location.href);
    alert("뒤로 이동할 수 없습니다.");
  };

  React.useEffect(() => {
    (() => {
      history.pushState(null, "", location.href);
      window.addEventListener("popstate", preventGoBack);
    })();

    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  });
};
