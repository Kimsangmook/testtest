import { DefaultContainer } from "components/common/container/DefaultContainer";
import { Title } from "components/common/text/Title";
import { Button } from "components/common/buttons/Button";
import { RadioGroup } from "components/common/RadioGroup";
import { RadioGroupSub } from "components/common/RadioGroupSub";
import {
  ChoiceInterface,
  SolutionInterface,
  useSolutionStore,
} from "stores/solution";
import { PassageIcons } from "components/common/PassageIcons";
import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { passageDifficultyMapper } from "utils/mapper/passageDifficultyMapper";

const DescriptionP = styled.p`
  color: #9c9c9c;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.5px;
  text-align: center;
  padding: 136px 0px 23px 0px;
`;

export const Step4Contents = () => {
  const router = useRouter();
  const { setSolutionValue } = useSolutionStore((state: SolutionInterface) => ({
    setSolutionValue: state.setSolutionValue,
  }));

  type PassageOption = {
    description: string;
    title: string;
    conditionArray: string[];
    check: string | null;
    subConditionArray: string[];
    difficulty: string | null;
  };

  const [passageCondition, setPassageCondition] = React.useState<PassageOption>(
    {
      description: "지문변형 범위 및 난이도를 선택하세요",
      title: "지문변형",
      conditionArray: ["변형없음", "어휘변형", "페러프레이징", "주제변형"],
      check: "",
      subConditionArray: ["고1", "고2", "고3"],
      difficulty: "",
    }
  );

  const onClickSubmit = () => {
    // NOTE : 카테고리, 난이도에 따라 body 구성
    const difficultChoiceBody = passageDifficultyMapper(
      passageCondition.check as any,
      passageCondition.difficulty as any
    );
    setSolutionValue({
      step: "5",
      passageDifficultyChoice: difficultChoiceBody as ChoiceInterface,
    });
    router.push("/steps/5");
  };

  const onClickPre = () => {
    // NOTE : 카테고리, 난이도에 따라 body 구성
    const difficultChoiceBody = passageDifficultyMapper(
      passageCondition.check as any,
      passageCondition.difficulty as any
    );
    setSolutionValue({
      step: "3",
      passageDifficultyChoice: difficultChoiceBody as ChoiceInterface,
    });
    router.push("/steps/3");
  };

  const handlePassageCondition = (selectedValue: string | null) => {
    setPassageCondition((prevState) => ({
      ...prevState,
      check: selectedValue,
      difficulty: selectedValue === "변형없음" ? "" : prevState.difficulty,
    }));
  };

  const handlePassageDifficulty = (selectedValue: string | null) => {
    setPassageCondition((prevState) => ({
      ...prevState,
      difficulty: selectedValue,
    }));
  };

  return (
    <DefaultContainer>
      <div className={"w-max mx-auto pb-[98px]"}>
        <Title
          title={`변형선택 2 / 2`}
          withIcon={true}
          iconSrc={"/icons/cycle.svg"}
          className={"pt-[27px] pb-[17px]"}
        />
        <DescriptionP>{passageCondition.description}</DescriptionP>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <RadioGroup
            title={passageCondition.title}
            checkArry={passageCondition.conditionArray}
            onClick={handlePassageCondition}
            iconSrc={"/icons/passageCondition.svg"}
          />
        </div>
        <RadioGroupSub
          passageCangeCondition={passageCondition.check}
          title="난이도"
          checkArry={passageCondition.subConditionArray as string[]}
          onClick={handlePassageDifficulty}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button title={"Pre"} className={"mx-2.5"} onClick={onClickPre} />
          <Button
            title={"지문입력"}
            className={"mx-2.5"}
            onClick={onClickSubmit}
          />
        </div>
      </div>
    </DefaultContainer>
  );
};
