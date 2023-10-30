import styled, { css } from "styled-components";
import { Rotate360Deg } from "styles/keyframes";

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={`border border-[#9C9C9C] border-solid rounded-sm flex justify-center items-center relative ${className}`}
    >
      <SpinnerSapn />
      <div className={"absolute"}>
        <p
          className={
            "text-center text-[23px] leading-[29px] text-[#9C9C9C] mb-[3px]"
          }
        >
          AI가 데이터를 취합하고 <br />
          있습니다
        </p>
        <p className={"text-[17px] text-[#9C9C9C]"}>
          최대 <span className={"font-medium text-orange"}>?분</span> 까지
          소요될 수 있습니다
        </p>
      </div>
    </div>
  );
};

const SpinnerSapn = styled.span`
  width: 364px;
  height: 364px;
  border: 20px solid #efefef;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: ${Rotate360Deg} 3s linear infinite;
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 80px;
    background-color: #ef7d00;
    width: 18px;
    height: 18px;
    transform: translate(-50%, 50%);
    border-radius: 50%;
  }
`;
