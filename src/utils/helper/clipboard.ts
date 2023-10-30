export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("정상적으로 복사하였습니다.");
  } catch (e) {
    alert("복사에 실패하였습니다");
  }
};
