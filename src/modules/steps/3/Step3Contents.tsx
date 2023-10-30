import { DefaultContainer } from "components/common/container/DefaultContainer";
import { Title } from "components/common/text/Title";
import { Button } from "components/common/buttons/Button";
import { RadioGroup } from "components/common/RadioGroup";
import { SolutionInterface, useSolutionStore } from "stores/solution";
import { PassageIcons } from "components/common/PassageIcons";
import React from "react";

import { useRouter } from "next/router";
import styled from "styled-components";

const DescriptionP = styled.p`
  color: #9c9c9c;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.5px;
  text-align: center;
  padding: 136px 0px 23px 0px;
`;

export const Step3Contents = () => {
  const router = useRouter();

  const { passageLength, setSolutionValue } = useSolutionStore(
    (state: SolutionInterface) => ({
      passageLength: state.defaultValue,
      setSolutionValue: state.setSolutionValue,
    })
  );

  type PassageOption = {
    description: string;
    title: string;
    conditionArray: string[];
    check: string | null;
  };

  const [passageCondition, setPassageCondition] = React.useState<PassageOption>(
    {
      description: "지문을 구성하는 문장수를 조절하세요",
      title: "문장길이",
      conditionArray: ["8문장 구성", "변형 없음", "4문장 구성"],
      check: "",
    }
  );

  const onClickSubmit = () => {
    setSolutionValue({
      step: "4",
      passageLengthChoice: {
        name: "문장길이",
        id: 2,
        value: passageCondition.check as string,
      },
    });
    router.push("/steps/4");
  };

  const handlePassageLength = (selectedValue: string | null) => {
    setPassageCondition((prevState) => ({
      ...prevState,
      check: selectedValue,
    }));
  };

  return (
    <DefaultContainer>
      <div className={"w-max mx-auto pb-[98px]"}>
        <Title
          title={`변형선택 1 / 2`}
          withIcon={true}
          iconSrc={"/icons/cycle.svg"}
          className={"pt-[27px] pb-[17px]"}
        />
        <DescriptionP>{passageCondition.description}</DescriptionP>

        <RadioGroup
          title={passageCondition.title}
          checkArry={passageCondition.conditionArray}
          onClick={handlePassageLength}
          iconSrc={"/icons/passageLength.svg"}
        />
        <PassageIcons />
        <Button
          title={"Next"}
          className={"block mx-auto"}
          onClick={onClickSubmit}
        />
      </div>
    </DefaultContainer>
  );
};
