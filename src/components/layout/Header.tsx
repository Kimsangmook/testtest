import Link from "next/link";

// NOTE : 기본 헤더
export const Header = () => {
  return (
    <header className={"bg-white"}>
      <div className={"w-[1080px] mx-auto bg-white"}>
        <Link href={"/"}>
          <img
            src={"/icons/logo.svg"}
            className={"w-[143px] p-[11px_0_7px_0] cursor-pointer"}
          />
        </Link>
      </div>
    </header>
  );
};
