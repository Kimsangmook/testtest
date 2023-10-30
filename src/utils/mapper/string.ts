// NOTE : ** **로 감싸져 있으면 <b>태그 처리, *은 모두 공백처리
export const textfieldStringMapper = (str: string) => {
  const reg = /\*\*(.*?)\*\*/g;
  const match = new RegExp(reg, "g");
  return str?.replace(match, "<b>" + str + "</b>").replace(/ */gi, "");
};
