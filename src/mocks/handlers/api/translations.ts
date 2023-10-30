import { rest, DelayMode } from "msw";
import {
  REQUEST_TRANSLATE_RESPONSE,
  REQUEST_TRANSLATE_VARIATION_RESPONSE,
  REQUEST_SOLUTION_CREATE_RESPONSE,
} from "constants/dummy";

const requestTranslate: Parameters<typeof rest.get>[1] = async (
  req,
  res,
  ctx
) => {
  return res(
    ctx.delay(800),
    ctx.status(200),
    ctx.json(REQUEST_TRANSLATE_RESPONSE) as any
  );
};

const requestSolutaionVariant: Parameters<typeof rest.get>[1] = async (
  req,
  res,
  ctx
) => {
  return res(
    ctx.delay(800),
    ctx.status(200),
    ctx.json(REQUEST_TRANSLATE_VARIATION_RESPONSE) as any
  );
};

const requestSolutionMake: Parameters<typeof rest.get>[1] = async (
  req,
  res,
  ctx
) => {
  return res(
    ctx.delay(800),
    ctx.status(200),
    ctx.json(REQUEST_SOLUTION_CREATE_RESPONSE) as any
  );
};

export const translationHandlers = [
  /**
   * 번역 요청(stpe 2) api
   * response: {
   *
   *  data
   * }
   */
  rest.post("/mock/steps/2", requestTranslate),
  /**
   * 지문 변형(stpe 5) api
   * response: {
   *  data
   * }
   */
  rest.post("/mock/steps/5", requestSolutaionVariant),
  /**
   * 유형적용, 문제 제작(stpe 7) api
   * response: {
   *  data
   * }
   */
  rest.post("/mock/steps/7", requestSolutionMake),
];
