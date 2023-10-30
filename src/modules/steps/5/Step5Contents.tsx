import { Button } from "components/common/buttons/Button";
import { DefaultContainer } from "components/common/container/DefaultContainer";
import { Title } from "components/common/text/Title";
import { SolutionInterface, useSolutionStore } from "stores/solution";
import { TextInput } from "components/common/textinput/TextInput";
import { TextField } from "components/common/textfield/TextField";
import { useRouter } from "next/router";
import { Label } from "components/common/label/Label";
import React from "react";
import { useQueryFetch } from "utils/apis/query/useQueryFetch";
import { requestTranslateVariation, requestTranslation } from "apis/step/step";
import { useGetFetchKey } from "utils/helper/useGetFecthKey";
import {
  TranslateDetailInterface,
  TranslateVariationDetailInterface,
} from "types/translate";
import { Spinner } from "components/common/loading/Spinner";

export const Step5Contents = () => {
  const fetchKey = useGetFetchKey();
  const textFieldRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  const {
    defaultValue,
    title,
    setSolutionValue,
    passageLengthChoice,
    passageDifficultyChoice,
  } = useSolutionStore((state: SolutionInterface) => ({
    title: state.title,
    defaultValue: state.defaultValue,
    setSolutionValue: state.setSolutionValue,
    passageLengthChoice: state.passageLengthChoice,
    passageDifficultyChoice: state.passageDifficultyChoice,
  }));

  // NOTE : 조건 변경, 뒤로 이동
  const onClickCondtionChange = () => {
    setSolutionValue({
      step: "4",
    });
    router.push("/steps/3");
  };

  const onClickSubmit = () => {
    setSolutionValue({
      step: "6",
      resultValue: {
        originalValue: data.result.passage,
        translatedValue: translateData.result,
      },
    });
    router.push("/steps/6");
  };

  const [editConfig, setEditConfig] = React.useState({
    isEditMode: false,
    editContent: "",
  } as { isEditMode: boolean; editContent: string });

  const [editPassage, setEditPassage] = React.useState({
    isEditMode: false,
    editContent: "",
  } as { isEditMode: boolean; editContent: string });

  const onClickEdit = () => {
    if (!editConfig.isEditMode) {
      const isConfirm = confirm("번역본을 수정하시겠습니까 ?");
      isConfirm &&
        setEditConfig({
          ...editConfig,
          isEditMode: true,
          editContent: data.result.passage,
        });

      textFieldRef.current && textFieldRef.current.focus();
    }
  };

  const onClickEditTranslation = () => {
    if (!editPassage.isEditMode) {
      const isConfirm = confirm("번역본을 수정하시겠습니까 ?");
      isConfirm &&
        setEditPassage({
          ...editConfig,
          isEditMode: true,
          editContent: data.result.passage,
        });

      textFieldRef.current && textFieldRef.current.focus();
    }
  };

  // NOTE : MSW MOCKING API (step 5)
  const { data, isLoading, isSuccess } = useQueryFetch({
    key: [fetchKey],
    method: () =>
      requestTranslateVariation({
        value: defaultValue.originalValue,
        choices: [passageLengthChoice, passageDifficultyChoice],
      }),
  }) as unknown as {
    data: TranslateVariationDetailInterface;
    isLoading: boolean;
    isSuccess: boolean;
  };

  // NOTE : MSW MOCKING API (step 2)
  const { data: translateData, isLoading: isTranslateLoading } = useQueryFetch({
    key: [fetchKey, "translate"],
    method: () => requestTranslation(data.result.passage),
    queryOption: {
      enabled: isSuccess,
      queryKey: [fetchKey],
    },
  }) as unknown as { data: TranslateDetailInterface; isLoading: boolean };

  const onClickReset = () => {
    console.log("reset");
  };

  return (
    <DefaultContainer>
      <div className={"w-[1080px] mx-auto py-[30px]"}>
        <Title
          title={"변형지문 확인"}
          withIcon={true}
          iconSrc={"/icons/search.svg"}
          className=""
        />
        <TextInput
          value={title}
          placeholder={"제목(출처)룰 입력하세요."}
          className={"my-[12px]"}
          isReadOnly={true}
        />
        <div>
          <div className={"w-max flex  justify-between"}>
            <div>
              <img
                src={"/icons/original_text_label.svg"}
                className={"mb-[12px]"}
              />
              <TextField
                value={defaultValue.originalValue}
                placeholder={"원하시는 지문을 작성하세요."}
                className={"h-[461px] mb-[10px] w-[512px] text-[#575757]"}
                isReadOnly={true}
              />
            </div>
            <div className={" flex  justify-center items-center "}>
              <img src={"/icons/arrow.svg"} className={"w-[56px]"} />
            </div>
            <div>
              <img
                src={"/icons/transformed_text_label_color.svg"}
                className={"mb-[12px]"}
              />
              {isLoading ? (
                <Spinner className={"h-[461px] w-[512px]"} />
              ) : (
                <TextField
                  value={
                    editConfig.isEditMode
                      ? editConfig.editContent
                      : data?.result.passage
                  }
                  placeholder={"원하시는 지문을 작성하세요."}
                  onChange={(value) =>
                    setEditConfig({ ...editConfig, editContent: value })
                  }
                  className={
                    "h-[461px] mb-[10px] w-[512px] border-[#EF7D00] text-[#575757]"
                  }
                  isReadOnly={true}
                />
              )}
              <div className={"flex justify-end mb-[11px]"}>
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
          <div className={"flex"}>
            <div>
              <img
                src={"/icons/original_text_translation_label.svg"}
                className={"mb-[12px]"}
              />
              <TextField
                value={defaultValue.translatedValue}
                placeholder={"원하시는 지문을 작성하세요."}
                className={"h-[461px] mb-[10px] w-[512px] text-[#575757]"}
                isReadOnly={true}
              />
            </div>
            <div className={" flex justify-center items-center "}>
              <img src={"/icons/arrow.svg"} className={"w-[56px]"} />
            </div>
            <div>
              <img
                src={"/icons/transformed_text_translation_label.svg"}
                className={"mb-[12px]"}
              />
              {isLoading || isTranslateLoading ? (
                <Spinner className={"h-[461px] w-[512px]"} />
              ) : (
                <TextField
                  value={
                    editPassage.isEditMode
                      ? editPassage.editContent
                      : translateData?.result
                  }
                  placeholder={"원하시는 지문을 작성하세요."}
                  onChange={(value) =>
                    setEditPassage({ ...editPassage, editContent: value })
                  }
                  className={
                    "h-[461px] mb-[10px] w-[512px] border-[#EF7D00] text-[#575757]"
                  }
                  isReadOnly={false}
                />
              )}
              <div className={"flex justify-end mb-[11px]"}>
                <div className={"flex"}>
                  <Label
                    title={"수정하기"}
                    className={"flex justify-end"}
                    leftIcon={
                      editPassage.isEditMode
                        ? "/icons/complete.svg"
                        : "/icons/edit.svg"
                    }
                    onClick={onClickEditTranslation}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"flex justify-center "}>
          <Button
            title="조건 변경"
            className={"mt-[40px]"}
            onClick={onClickCondtionChange}
          />
          <Button
            title="지문 확인 및 저장"
            className={"mt-[40px]"}
            onClick={onClickSubmit}
          />
        </div>
      </div>
    </DefaultContainer>
  );
};
