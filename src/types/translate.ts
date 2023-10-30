import { ChoiceInterface } from "stores/solution";

export type DifficultyCategoryType =
  | "변형없음"
  | "어휘변형"
  | "페러프레이징"
  | "주제변형";

export type GradeDifficultyType = "고1" | "고2" | "고3";

export interface TranslateDetailInterface {
  id: number;
  name: string;
  result: string;
}

export interface TranslateVariationDetailInterface {
  id: number;
  name: string;
  result: {
    passage: string;
  };
}

export interface TranslateRequestBodyInterface {
  name: string;
  id: number;
  value: string;
}
export interface TranslateVarationRequestBodyInterface {
  name: string;
  id: number;
  value: string;
  choices: ChoiceInterface[];
}

export interface SolutionDetailInterface {
  name: string;
  id: number;
  result: string;
}

export interface SolutionCreateRequestBodyInterface {
  name: string;
  id: number;
  value: string;
}
