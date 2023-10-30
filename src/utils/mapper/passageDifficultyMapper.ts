import { DifficultyCategoryType, GradeDifficultyType } from "types/translate";

// NOTE : 지문변형 및 난이도 body mapper
export const passageDifficultyMapper = (
  category: DifficultyCategoryType,
  gradeDifficulty: GradeDifficultyType
) => {
  // NOTE : 기본 body
  const defaultBody = { name: "변형범위", id: 3, value: "" };

  let choices = {};

  switch (category) {
    case "어휘변형":
      choices = [
        {
          name: "어휘변형",
          id: 10,
          value: "",
          choices: [
            {
              name: "어휘난이도",
              id: 4,
              value: gradeDifficulty,
            },
          ],
        },
      ];
      break;
    case "페러프레이징":
      choices = [
        {
          name: "페러프레이징",
          id: 11,
          value: "",
          choices: [
            {
              name: "어휘난이도",
              id: 16,
              value: gradeDifficulty,
            },
          ],
        },
      ];
      break;
    case "주제변형":
      choices = [
        {
          name: "주제변형",
          id: 12,
          value: "",
          choices: [
            {
              name: "어휘난이도",
              id: 16,
              value: gradeDifficulty,
            },
          ],
        },
      ];
      break;
    default:
      choices = {};
  }
  // NOTE : 변형없음은 choice 필요없음
  const mappedBody =
    category === "변형없음" ? defaultBody : { ...defaultBody, choices };
  return mappedBody;
};
