import { useRouter } from "next/router";
import React from "react";
import { useSolutionStore } from "stores/solution";

// NOTE : 기본적인 error boundary
export const ErrorBoundary = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const router = useRouter();
  const { step } = useSolutionStore((state) => ({
    step: state.step,
  }));

  // NOTE : useMemo 사용할시
  //   const isError = React.useMemo<boolean>(()=>{
  //     if(router.pathname !== "/" && step !== "1"){
  //         return true;
  //     }
  //     return false;
  //   },[router.pathname, step])

  // NOTE : 루트페이지가 아니면서 step이 초기값(1)이 아닐경우 에러로 판단
  const isError = () => {
    if (router.pathname !== "/" && step !== "1") {
      return true;
    }
    return false;
  };

  // NOTE : 에러일경우 홈으로 이동
  React.useEffect(() => {
    if (isError()) {
      window.location.replace("/");
    }
  }, []);

  return <div>{children}</div>;
};
