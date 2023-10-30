import { ChoiceInterface } from "stores/solution";
import {
  SolutionCreateRequestBodyInterface,
  TranslateRequestBodyInterface,
  TranslateVarationRequestBodyInterface,
} from "types/translate";
import { postMethod } from "utils/apis/method/postMethod";

// NOTE : dev모드면 mocking api, prod는 실제 api
const IS_DEV = process.env.NEXT_PUBLIC_MODE === "dev";

// NOTE : 번역요청 api (step 2)
export const requestTranslation = (value: string) => {
  // NOTE : 고정된 값 body 매핑
  const requestBody: TranslateRequestBodyInterface = {
    name: "번역",
    id: 5,
    value: value,
  };

  return IS_DEV
    ? postMethod({
        url: "/mock/steps/2",
        body: requestBody,
        isOrigin: true,
      })()
    : postMethod({
        url: "",
        body: requestBody,
      })();
};

export const requestTranslateVariation = ({
  value,
  choices,
}: {
  value: string;
  choices: ChoiceInterface[];
}) => {
  const requestBody: TranslateVarationRequestBodyInterface = {
    name: "지문변형",
    id: 1,
    value: value,
    choices: choices,
  };

  return IS_DEV
    ? postMethod({
        url: "/mock/steps/5",
        body: requestBody,
        isOrigin: true,
      })()
    : postMethod({
        url: "",
        body: requestBody,
      })();
};

// NOTE : 문제제작 요청 api
export const requestSolutionCreate = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  const requestBody: SolutionCreateRequestBodyInterface = {
    name: name,
    id: 6,
    value: value,
  };

  return IS_DEV
    ? postMethod({
        url: "/mock/steps/7",
        body: requestBody,
        isOrigin: true,
      })()
    : postMethod({
        url: "",
        body: requestBody,
      })();
};
