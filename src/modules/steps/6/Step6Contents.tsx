import { Button } from "components/common/buttons/Button";
import { DefaultContainer } from "components/common/container/DefaultContainer";
import { Title } from "components/common/text/Title";
import React, { useState } from "react";
import { Menu } from "components/common/menus/Menu";
import { SolutionInterface, useSolutionStore } from "stores/solution";
import { useRouter } from "next/router";

interface MenuInteface {
  id: number;
  name: string;
  isUsable?: boolean;
}

const MENU_ARR = [
  {
    id: 0,
    name: "대의파악(한)",
    isUsable: true,
  },
  {
    id: 1,
    name: "대의파악(영)",
    isUsable: true,
  },
  {
    id: 2,
    name: "목적",
  },
  {
    id: 3,
    name: "심경변화",
  },
  {
    id: 4,
    name: "함축적 의미추론",
  },
  {
    id: 5,
    name: "일치/불일치",
  },
  {
    id: 6,
    name: "안내문 불일치",
  },
  {
    id: 7,
    name: "안내문 일치 ",
  },
  {
    id: 8,
    name: "어법(밑줄형)",
  },
  {
    id: 9,
    name: "어법(선택형)",
  },
  {
    id: 10,
    name: "어휘(밑줄형)",
  },
  {
    id: 11,
    name: "어휘(선택형)",
  },
  {
    id: 12,
    name: "빈칸추론",
  },
  {
    id: 13,
    name: "무관(문장 삭제)",
  },
  {
    id: 14,
    name: "순서 배열",
  },
  {
    id: 15,
    name: "문장 삽입",
  },
  {
    id: 16,
    name: "요약문",
  },
  {
    id: 17,
    name: "단일 장문",
  },
  {
    id: 18,
    name: "복합 장문",
  },
];

export const Step6Contents = () => {
  //   const { step } = useSolutionStore((state) => ({
  //     step: state.step,
  //   }));

  const [menuConfig, setMenuConfig] = useState({
    id: -1,
    name: "",
  });

  const router = useRouter();
  const { step, setSolutionValue, variantOption } = useSolutionStore(
    (state: SolutionInterface) => ({
      step: state.step,
      setSolutionValue: state.setSolutionValue,
      variantOption: state.variantOption,
    })
  );

  const onClickSubmit = () => {
    setSolutionValue({
      step: "6",
      variantOption: menuConfig.name,
    });
    router.push("/steps/7");
  };

  const onClickMenu = (menu: MenuInteface) => {
    setMenuConfig({ ...menuConfig, id: menu.id, name: menu.name });
  };

  const isDisabled = React.useMemo(() => {
    if (menuConfig.id === -1) {
      return true;
    }
    return false;
  }, [menuConfig]);

  return (
    <DefaultContainer>
      <div className={"w-[1080px] mx-auto py-[30px]"}>
        <Title
          title={"유형선택"}
          withIcon={true}
          iconSrc={"/icons/pointer.svg"}
          className=""
        />
        <div
          className={
            "flex flex-col justify-center items-center pt-[123px] pb-[100px]"
          }
        >
          <p className={"text-[#9C9C9C] text-[28px] mb-[21px]"}>
            적용하고자 하는 유형을 선택하세요
          </p>

          <div className="flex flex-wrap gap-[20px 2%]">
            {MENU_ARR.map((menu) => (
              <Menu
                key={menu.id}
                id={menu.id}
                title={menu.name}
                onClick={() => onClickMenu(menu)}
                className={
                  menu.id === menuConfig.id
                    ? "bg-[#F6DFC2] text-[#EF7D00] border-[#EF7D00] font-medium"
                    : ""
                }
                disabled={!menu.isUsable}
              />
            ))}
          </div>
          <Button
            title="유형 적용"
            className={"mt-[40px]"}
            onClick={onClickSubmit}
            disabled={isDisabled}
          />
        </div>
      </div>
    </DefaultContainer>
  );
};
