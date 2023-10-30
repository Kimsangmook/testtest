import { Button } from "components/common/buttons/Button";
import { DefaultContainer } from "components/common/container/DefaultContainer";
import { Title } from "components/common/text/Title";
import { TextField } from "components/common/textfield/TextField";
import { TextInput } from "components/common/textinput/TextInput";
import { ErrorMessageEnum } from "constants/message";
import { useRouter } from "next/router";
import React from "react";
import { SolutionInterface, useSolutionStore } from "stores/solution";

export const Step1Contents = () => {
  const router = useRouter();
  const [textInput, setTextInput] = React.useState({
    title: "",
    content: "",
  });

  const { setSolutionValue } = useSolutionStore((state: SolutionInterface) => ({
    setSolutionValue: state.setSolutionValue,
  }));

  const handleTitleChange = (value: string) => {
    setTextInput({ ...textInput, title: value });
  };

  const handleContentCahgen = (value: string) => {
    setTextInput({ ...textInput, content: value });
  };

  // NOTE : 최소 한개라도 입력되지 않을경우 alert
  const isValid = React.useMemo<boolean>(() => {
    if (textInput.title === "" || textInput.content === "") {
      return false;
    }
    return true;
  }, [textInput]);

  const onClickSubmit = () => {
    if (!isValid) {
      alert(ErrorMessageEnum.STEP1_SUBMIT_ERROR);
      return;
    }
    // NOTE : step, title, defaultValue 변경 후 라우팅
    setSolutionValue({
      step: "2",
      title: textInput.title,
      defaultValue: { originalValue: textInput.content, translatedValue: "" },
    });

    router.push("/steps/2");
  };

  return (
    <DefaultContainer>
      <div className={"w-max mx-auto pb-[98px]"}>
        <Title
          title={"지문입력"}
          withIcon={true}
          iconSrc={"/icons/write.svg"}
          className={"pt-[27px] pb-[17px]"}
        />
        <TextInput
          value={textInput.title}
          placeholder={"제목(출처)를 입력하세요."}
          onChange={(value: string) => handleTitleChange(value)}
          className={"mb-[12px]"}
        />
        <TextField
          value={textInput.content}
          placeholder={"원하시는 지문을 작성하세요."}
          onChange={(value: string) => handleContentCahgen(value)}
          className={"h-[461px] mb-[28px]"}
        />
        <Button
          title={"지문입력"}
          className={"block mx-auto"}
          onClick={onClickSubmit}
        />
      </div>
    </DefaultContainer>
  );
};
