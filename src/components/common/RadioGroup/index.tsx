import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface RadioGroupProps {
  title: string | undefined;
  checkArry: string[];
  onClick?: (selectedValue: string | null) => void;
  className?: string;
  iconSrc?: string;
}

const RadioGroupContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 70px;
`;

const TitleDiv = styled.div`
  border-radius: 35px 0 0 35px;
  border: 1.5px solid #9c9c9c;
  background: #ef7d00;
  color: #ffffff;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 87.5% */
  letter-spacing: -0.5px;

  width: 263px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Label = styled.label`
  cursor: pointer;

  flex: 1;
  height: 100%;
`;

const LabelText = styled.div`
  border-top: solid 1.5px #9c9c9c;
  border-right: solid 1.5px #9c9c9c;
  border-bottom: solid 1.5px #9c9c9c;

  color: #9c9c9c;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 103.704% */
  letter-spacing: -0.5px;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: rgba(239, 125, 0, 0.25);
    color: #ef7d00;
  }
`;

const LastLabelText = styled.div`
  border-radius: 0 35px 35px 0;
  border: 1.5px solid #9c9c9c;
  border-left: 0;
  color: #9c9c9c;

  text-align: center;
  font-family: Noto Sans KR;
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 103.704% */
  letter-spacing: -0.5px;

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: rgba(239, 125, 0, 0.25);
    color: #ef7d00;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${LabelText} {
    background-color: rgba(239, 125, 0, 0.25);
    color: #ef7d00;
  }

  &:checked + ${LastLabelText} {
    background-color: rgba(239, 125, 0, 0.25);
    color: #ef7d00;
  }
`;

const Title = ({
  title,
  iconSrc,
}: {
  title: string | undefined;
  iconSrc?: string | undefined;
}) => (
  <TitleDiv>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {iconSrc && <img src={iconSrc} />}
      <div
        style={{
          padding: "15px",
        }}
      >
        {title}
      </div>
    </div>
  </TitleDiv>
);

export const RadioGroup = (props: RadioGroupProps) => {
  const { title, checkArry, onClick, className, iconSrc } = props;

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    if (onClick) {
      onClick(selectedValue);
    }

    setSelectedValue(selectedValue);
  };

  return (
    <RadioGroupContainer>
      <Title title={title} iconSrc={iconSrc} />
      {checkArry.map((item, index, array) => (
        <Label key={item}>
          <Input
            type="radio"
            value={item}
            name={title}
            checked={selectedValue === item}
            onChange={handleRadioChange}
          />
          {index + 1 === array.length ? (
            <LastLabelText>{item}</LastLabelText>
          ) : (
            <LabelText>{item}</LabelText>
          )}
        </Label>
      ))}
    </RadioGroupContainer>
  );
};
