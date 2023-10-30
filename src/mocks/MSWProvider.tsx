import React, { type PropsWithChildren } from "react";

const IS_MOCKING_MODE = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

// NOTE : MSW 활성화 후 컴포넌트 랜더링
export const MSWProvider = ({ children }: PropsWithChildren) => {
  const [isMSWReady, setIsMSWReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    const init = async () => {
      if (IS_MOCKING_MODE) {
        const initMocks = await import("./index").then((res) => res.setupMocks);
        await initMocks();
        setIsMSWReady(true);
      }
    };
    if (!isMSWReady) {
      init();
    }
  }, [isMSWReady]);

  if (!isMSWReady && IS_MOCKING_MODE) {
    return null;
  }

  return <>{children}</>;
};
