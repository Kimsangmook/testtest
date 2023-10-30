import { create } from "zustand";

// NOTE : 총 7단계의 step
type StepType = "1" | "2" | "3" | "4" | "5" | "6" | "7";

type VariantOptionType = "" | "대의파악(한)" | "대의파악(영)";

export interface ChoiceInterface {
  name: string;
  id: number;
  value: string;
  choices?: ChoiceInterface[];
}

interface DefalutValueInterface {
  originalValue: string;
  translatedValue: string;
}

interface ResultValueInteface {
  originalValue: string;
  translatedValue: string;
}
interface PassageCangeConditionInteface {
  passageCangeCondition: string | null;
  difficulty: string | null;
}

// NOTE : solution 인터페이스
export interface SolutionInterface {
  title: string;
  variantOption: string;
  step: StepType;
  defaultValue: DefalutValueInterface;
  resultValue: ResultValueInteface;
  passageLengthChoice: ChoiceInterface;
  passageDifficultyChoice: ChoiceInterface;

  setSolutionValue: ({
    title,
    step,
    defaultValue,
    resultValue,
    variantOption,
    passageLengthChoice,
    passageDifficultyChoice,
  }: {
    title?: string;
    step?: StepType;
    defaultValue?: DefalutValueInterface;
    resultValue?: ResultValueInteface;
    variantOption?: string;
    passageLengthChoice?: ChoiceInterface;
    passageDifficultyChoice?: ChoiceInterface;
  }) => void;
}

export const useSolutionStore = create<SolutionInterface>((set) => ({
  title: "",
  variantOption: "",
  step: "1",
  defaultValue: {
    originalValue: "",
    translatedValue: "",
  },
  resultValue: {
    originalValue: "",
    translatedValue: "",
  },
  // REVIEW : step 3과 step 4 분리하여 사용, 요청할땐 한번에 body로 요청
  passageLengthChoice: {
    name: "",
    id: 0,
    value: "",
  },
  passageDifficultyChoice: {
    name: "",
    id: 0,
    value: "",
  },

  // NOTE : 통으로 store 데이터 변경
  setSolutionValue: (data) => set((state) => ({ ...state, ...data })),
}));
