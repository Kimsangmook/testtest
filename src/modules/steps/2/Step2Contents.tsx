import { Button } from "components/common/buttons/Button";
import { DefaultContainer } from "components/common/container/DefaultContainer";
import { Spinner } from "components/common/loading/Spinner";
import { Title } from "components/common/text/Title";
import { TextField } from "components/common/textfield/TextField";
import { TextInput } from "components/common/textinput/TextInput";
import { useRouter } from "next/router";
import React from "react";
import { SolutionInterface, useSolutionStore } from "stores/solution";
import { TranslateDetailInterface } from "types/translate";
import { Label } from "components/common/label/Label";
import { useQueryFetch } from "utils/apis/query/useQueryFetch";
import { requestTranslation } from "apis/step/step";
import { useGetFetchKey } from "utils/helper/useGetFecthKey";

export const Step2Contents = () => {
  const fetchKey = useGetFetchKey();
  const textFieldRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [editConfig, setEditConfig] = React.useState({
    isEditMode: false,
    editContent: "",
  } as { isEditMode: boolean; editContent: string });

  const { defaultValue, title, setSolutionValue } = useSolutionStore(
    (state: SolutionInterface) => ({
      title: state.title,
      defaultValue: state.defaultValue,
      setSolutionValue: state.setSolutionValue,
    })
  );

  // NOTE : MSW MOCKING API (step 2)
  const { data, isLoading } = useQueryFetch({
    key: [fetchKey],
    method: () => requestTranslation(defaultValue.originalValue),
  }) as unknown as { data: TranslateDetailInterface; isLoading: boolean };

  // NOTE : 수정하기
  const onClickEdit = () => {
    if (!editConfig.isEditMode) {
      const isConfirm = confirm("번역본을 수정하시겠습니까 ?");
      isConfirm &&
        setEditConfig({
          ...editConfig,
          isEditMode: true,
          editContent: data.result,
        });
      // NOTE : 입력필드로 커서 이동
      textFieldRef.current && textFieldRef.current.focus();
    }
  };

  // NOTE : edit mode면 editConfig의 content, 아니면 api의 result 값 전달
  const onClickSubmit = () => {
    setSolutionValue({
      step: "3",
      defaultValue: {
        originalValue: defaultValue.originalValue,
        translatedValue: editConfig.isEditMode
          ? editConfig.editContent
          : data.result,
      },
    });
    router.push("/steps/3");
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
          value={title}
          placeholder={"제목(출처)를 입력하세요."}
          className={"mb-[12px]"}
          isReadOnly={true}
        />
        <div className={"w-max flex justify-between mb-[7px]"}>
          <TextField
            value={defaultValue.originalValue}
            placeholder={"원하시는 지문을 작성하세요."}
            className={"h-[461px] mb-[7px] w-[49%]"}
            isReadOnly={true}
          />
          {isLoading ? (
            <Spinner className={"h-[461px] w-[49%]"} />
          ) : (
            <TextField
              ref={textFieldRef}
              value={
                editConfig.isEditMode ? editConfig.editContent : data?.result
              }
              placeholder={"원하시는 지문을 작성하세요."}
              className={"h-[461px] w-[49%]"}
              onChange={(value) =>
                setEditConfig({ ...editConfig, editContent: value })
              }
            />
          )}
        </div>
        <Label
          title={"수정하기"}
          className={"flex justify-end"}
          leftIcon={
            editConfig.isEditMode ? "/icons/complete.svg" : "/icons/edit.svg"
          }
          onClick={onClickEdit}
          disabled={true}
        />
        <Button
          title={"지문 저장 후 변형선택"}
          className={"block mx-auto"}
          onClick={onClickSubmit}
          disabled={isLoading}
        />
      </div>
    </DefaultContainer>
  );
};
