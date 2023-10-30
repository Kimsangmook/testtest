import { DefaultContainer } from "components/common/container/DefaultContainer";
import { Layout } from "components/layout/Layout";
import { Title } from "components/common/text/Title";
import { Container } from "postcss";
import { styled } from "styled-components";
import React from "react";
import { useState } from "react";

interface AicodianInterface {
  title: string;
  content: string;
}

interface DataInterface {
  id: number;
  type?: string;
  title: string;
  update?: string;
  content?: string;
  onClick?: (e: any) => void;
  active?: boolean;
}
const Acodian = ({ type, title, content, onClick, active }: DataInterface) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const childRef = React.useRef<HTMLDivElement>(null);

  const [isCollapse, setIsCollappse] = React.useState(false);
  //prop 가 바뀌지 않았다면 , 리렌더링 하지않고
  //특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.
  //   const handleButtonClick = React.useCallback(
  //     (e: any) => {
  //       e.stopPropagation();
  //       if (parentRef.current === null || childRef.current === null) {
  //         return;
  //       }

  //       if (parentRef.current.clientHeight > 0) {
  //         parentRef.current.style.height = "0";
  //       } else {
  //         parentRef.current.style.height = `${
  //           childRef.current.clientHeight + 20
  //         }px`;
  //       }
  //       setIsCollappse(!isCollapse);
  //     },
  //     [isCollapse]
  //   );
  return (
    <div>
      <div
        className={
          "flex items-center bg-white text-[#817F7F] mb-[10px] p-[20px] h-[32px] cursor-pointer rounded-lg"
        }
        onClick={onClick}
      >
        <span className={"text-orange font-medium"}>[ {type} ]&nbsp; </span>
        {title}
      </div>
      <div
        className={`w-[100%]  overflow-hidden transition-all duration-500
              ${active == true ? "block" : "hidden"}
        
        `}
        ref={parentRef}
      >
        <div
          className={`
                      rounded p-[8px] text-[#575757] leading-7 bg-white border-solid border-[1px] border-[#A4A4A4]
        `}
          ref={childRef}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

const Test = () => {
  //   const problems = Array.from({ length: 12 }, (x) => {
  //     x;
  //   }).map((problem) => {
  //     return problem;
  //   });

  const data = Array.from({ length: 12 }).map((item, index) => ({
    id: index,
    type: `대의파악`,
    title: `수능/평가원 2016학년도 수능 ${index + 1}번`,
    update: `2023.10.${index + 2}`,
    content:
      " you still wish to intercept this unhandled request, please create a request handler for it.".repeat(
        index
      ),
  }));
  //   console.log(data);
  const [activeIndex, setactiveIndex] = useState({
    id: -1,
    name: "",
  });
  const onclick = (data: DataInterface) => {
    console.log(data.id);
    setactiveIndex({ ...activeIndex, id: data.id });
  };

  return (
    <Layout>
      <DefaultContainer>
        <div className={" max-w-6xl px-[20px] mx-auto pb-[98px]"}>
          <Title
            title={"내문서"}
            withIcon={true}
            iconSrc={"/icons/write.svg"}
            className={"pt-[27px] mb-[19px]"}
          />
          <Title
            title={"문제목록"}
            className={"mb-[26px] text-orange text-[38px]"}
            fontSize={38}
          />

          <div className={"my-[20px] p-[20px] bg-[#EFEFEF] "}>
            <div
              className={
                "border-solid border-orange border-[0.5px] text-orange text-xs bg-white mb-[40px] p-[15px] rounded-full"
              }
            >
              search
            </div>
            {data.map((data, idx) => {
              const active = idx === activeIndex.id ? true : false;
              return (
                <Acodian
                  id={data.id}
                  key={data.id}
                  type={data.type}
                  title={data.title}
                  content={data.id + data.content}
                  onClick={() => onclick(data)}
                  active={active}
                />
              );
            })}
          </div>
        </div>
      </DefaultContainer>
    </Layout>
  );
};

export default Test;
