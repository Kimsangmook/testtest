import { NextRouter } from "next/router";
import React from "react";

// NOTE : 현재 url의 position 저장
const saveScrollPosition = (url: string) => {
  const scrollPos = { x: window.scrollX, y: window.scrollY };
  sessionStorage.setItem(url, JSON.stringify(scrollPos));
};

// NOTE : 스토리지에 현재 url 존재하면 해당 스크롤로 복원
const restoreScrollPosition = (url: string) => {
  const scrollPos = JSON.parse(sessionStorage.getItem(url) as any);
  if (scrollPos) {
    setTimeout(() => window.scrollTo(scrollPos.x, scrollPos.y), 0);
  }
};

// NOTE : 뒤돌아갔을 때 스크롤 원복 (추후 필요하면 사용)
export default function useScrollRestoration(router: NextRouter) {
  React.useEffect(() => {
    window.history.scrollRestoration = "manual";
    const onRouteChangeStart = () => {
      saveScrollPosition(router.asPath);
    };

    const onRouteChangeComplete = (url: string) => {
      restoreScrollPosition(url);
    };

    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router]);
}
