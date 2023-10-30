import { Button } from "components/common/buttons/Button";
import { DefaultContainer } from "components/common/container/DefaultContainer";
import { useRouter } from "next/router";
import { SolutionInterface, useSolutionStore } from "stores/solution";

export const RootContents = () => {
  const router = useRouter();
  const { setSolutionValue } = useSolutionStore((state: SolutionInterface) => ({
    setSolutionValue: state.setSolutionValue,
  }));

  // NOTE : store 값 변화후 router 이동
  const onClickStart = () => {
    setSolutionValue({ step: "1" });
    router.push("/steps/1");
  };

  return (
    <DefaultContainer>
      <div
        className={
          "flex flex-col justify-center items-center pt-[259px] pb-[404px]"
        }
      >
        <p className={"text-[#9C9C9C] text-[28px] mb-[21px]"}>
          지문 입력방식을 선택하세요.
        </p>
        <div className={"flex"}>
          <Button
            title={"지문 불러오기"}
            disabled={true}
            className={"mr-[20px]"}
          />
          <Button title={"지문입력"} onClick={onClickStart} />
        </div>
      </div>
    </DefaultContainer>
  );
};
