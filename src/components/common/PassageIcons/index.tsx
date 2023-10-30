import React, { JSXElementConstructor } from "react";
import styled from "styled-components";

const PassageIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 0 110px 0;
`;

const PassageIconsContainer = styled.div`
  display: flex;
  width: 817px;
`;

const iconsSrcArry = [
  "/icons/passageEasy.svg",
  "/icons/passageNormal.svg",
  "/icons/passageHard.svg",
];

const MyImgWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const GuideDecoratorWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 328px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const GuideImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PassageIcon = ({
  iconSrc,
  children,
}: {
  iconSrc: string;
  children?: JSX.Element;
}) => {
  return (
    <MyImgWrapper>
      <img src={iconSrc} />
      {children}
    </MyImgWrapper>
  );
};

const GuideDecorator = () => {
  return (
    <GuideDecoratorWrapper>
      <GuideImgWrapper>
        <img src={"/icons/passageLeft.svg"} />
      </GuideImgWrapper>
      <GuideImgWrapper>
        <img src={"/icons/passageRight.svg"} />
      </GuideImgWrapper>
    </GuideDecoratorWrapper>
  );
};

export const PassageIcons = () => {
  return (
    <PassageIconsWrapper>
      <PassageIconsContainer>
        {iconsSrcArry.map((item, index, array) => {
          if (index === Math.floor(array.length / 2)) {
            return (
              <PassageIcon iconSrc={item}>
                <GuideDecorator />
              </PassageIcon>
            );
          } else {
            return <PassageIcon key={index} iconSrc={item} />;
          }
        })}
      </PassageIconsContainer>
    </PassageIconsWrapper>
  );
};
