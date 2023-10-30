import { Footer } from "./Footer";
import { Header } from "./Header";

// NOTE : 기본적인 레이아웃
export const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
