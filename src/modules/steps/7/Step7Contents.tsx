import { Button } from "components/common/buttons/Button";
import { DefaultContainer } from "components/common/container/DefaultContainer";
import { Spinner } from "components/common/loading/Spinner";
import { Title } from "components/common/text/Title";
import { TextField } from "components/common/textfield/TextField";
import { TextInput } from "components/common/textinput/TextInput";
import React from "react";
import { SolutionInterface, useSolutionStore } from "stores/solution";
import { SolutionDetailInterface } from "types/translate";
import { Label } from "components/common/label/Label";
import { copyToClipboard } from "utils/helper/clipboard";
import { useQueryFetch } from "utils/apis/query/useQueryFetch";
import { requestSolutionCreate } from "apis/step/step";
import { useGetFetchKey } from "utils/helper/useGetFecthKey";

export const Step7Contents = () => {
  const fetchKey = useGetFetchKey();
  const textFieldRef = React.useRef<HTMLInputElement>(null);

  const [editConfig, setEditConfig] = React.useState({
    isEditMode: false,
    editContent: "",
  } as { isEditMode: boolean; editContent: string });

  const { title, defaultValue, variantOption, resultValue } = useSolutionStore(
    (state: SolutionInterface) => ({
      title: state.title,
      defaultValue: state.defaultValue,
      setSolutionValue: state.setSolutionValue,
      variantOption: state.variantOption,
      resultValue: state.resultValue,
    })
  );
  console.log(resultValue);
  // NOTE : MSW MOCKING API (step 6)
  const { data, isLoading } = useQueryFetch({
    key: [fetchKey],
    method: () =>
      requestSolutionCreate({
        name: variantOption,
        value: resultValue.originalValue,
      }),
  }) as unknown as {
    data: SolutionDetailInterface;
    isLoading: boolean;
    refetch: () => void;
  };

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

  // NOTE : 클립보드로 저장
  const onClickCopy = () => {
    copyToClipboard(data.result);
  };
  // NOTE : 추후 로직 추가
  const onClickReset = () => {
    console.log("reset");
  };
  // TODO : 제출 로직 추후 추가
  const onClickSubmit = () => {
    console.log("submit");
  };
  return (
    <DefaultContainer>
      <div className={"w-max mx-auto pb-[98px]"}>
        <Title
          title={"유형적용 확인"}
          withIcon={true}
          iconSrc={"/icons/write.svg"}
          className={"pt-[27px] mb-[19px]"}
        />
        <Title
          title={variantOption}
          className={"mb-[26px] text-orange text-[38px]"}
          fontSize={38}
        />
        <TextInput
          value={title}
          placeholder={"제목(출처)를 입력하세요."}
          className={"mb-[21px]"}
          isReadOnly={true}
        />
        <div className={"w-max flex justify-between mb-[7px]"}>
          <div className={"w-[512px]"}>
            <div className={"relative"}>
              <img
                src={"/icons/transformed_text_label.svg"}
                className={"mb-[10px]"}
              />
              <img
                src={"/icons/next_arrow_big.svg"}
                className={
                  "absolute right-[-56px] top-[50%] translate-y-[-50%]"
                }
              />
              <TextField
                value={resultValue.originalValue}
                placeholder={"원하시는 지문을 작성하세요."}
                className={"h-[461px] mb-[42px]"}
                isReadOnly={true}
              />
            </div>
            <img
              src={"/icons/original_text_label.svg"}
              className={"mb-[10px]"}
            />
            <TextField
              value={defaultValue.originalValue}
              placeholder={"원하시는 지문을 작성하세요."}
              className={"h-[280px] mb-[7px]"}
              isReadOnly={true}
            />
          </div>
          <div className={"w-[512px]"}>
            <img
              src={"/icons/applied_text_label.svg"}
              className={"mb-[10px]"}
            />
            {isLoading ? (
              <Spinner className={"h-[823px] w-full mb-[11px]"} />
            ) : (
              <TextField
                ref={textFieldRef}
                value={
                  editConfig.isEditMode ? editConfig.editContent : data.result
                }
                placeholder={"원하시는 지문을 작성하세요."}
                className={"h-[823px] w-full mb-[11px]"}
                onChange={(value) =>
                  setEditConfig({ ...editConfig, editContent: value })
                }
              />
            )}
            <div className={"flex justify-between mb-[11px]"}>
              <Label
                title={"텍스트 복사"}
                className={"flex justify-end"}
                leftIcon={"/icons/copy.svg"}
                disabled={true}
                onClick={onClickCopy}
              />
              <div className={"flex"}>
                <Label
                  title={"다시변형"}
                  className={"flex justify-end mr-[10px]"}
                  leftIcon={"/icons/reset.svg"}
                  onClick={onClickReset}
                  disabled={true}
                />
                <Label
                  title={"수정하기"}
                  className={"flex justify-end"}
                  leftIcon={
                    editConfig.isEditMode
                      ? "/icons/complete.svg"
                      : "/icons/edit.svg"
                  }
                  onClick={onClickEdit}
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          title={"문제 저장"}
          className={"block mx-auto mt-[124px]"}
          onClick={onClickSubmit}
          disabled={isLoading}
        />
      </div>
    </DefaultContainer>
  );
};
