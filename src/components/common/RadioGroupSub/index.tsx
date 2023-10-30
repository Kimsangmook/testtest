import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface RadioGroupProps {
  passageCangeCondition: string | null;
  title: string | undefined;
  checkArry: string[];
  onClick?: (selectedValue: string | null) => void;
  className?: string;
}

const RadioGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 43px 0px 195px 0px;
`;

const Title = styled.div`
  color: #ef7d00;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 27px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 103.704% */
  letter-spacing: -0.5px;
  margin-right: 42px;
`;

const Label = styled.label`
  cursor: pointer;
`;

const LabelText = styled.div`
  border-radius: 50%;
  color: #9c9c9c;
  background-color: #efefef;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 103.704% */
  letter-spacing: -0.5px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 70px;
  height: 70px;

  margin-right: 50px;

  &:hover {
    border: 1.5px solid #ef7d00;
    background-color: #ffffff;
    color: #ef7d00;
  }
`;

const LastLabelText = styled.div`
  border-radius: 50%;
  padding: 10px;
  color: #9c9c9c;
  background-color: #efefef;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.5px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 70px;
  height: 70px;

  &:hover {
    border: 1.5px solid #ef7d00;
    background-color: #ffffff;
    color: #ef7d00;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${LabelText} {
    border: 1.5px solid #ef7d00;
    background-color: #ffffff;
    color: #ef7d00;
  }

  &:checked + ${LastLabelText} {
    border: 1.5px solid #ef7d00;
    background-color: #ffffff;
    color: #ef7d00;
  }
`;

export const RadioGroupSub = (props: RadioGroupProps) => {
  const { passageCangeCondition, title, checkArry, onClick, className } = props;

  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [containerVisibility, setContainerVisibility] = useState(true);

  useEffect(() => {
    if (passageCangeCondition === "변형없음") {
      setContainerVisibility(false);
    } else {
      setContainerVisibility(true);
    }
  }, [passageCangeCondition]);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;

    if (onClick) {
      onClick(selectedValue);
    }

    setSelectedValue(selectedValue);
  };

  return (
    <RadioGroupContainer
      style={{ visibility: containerVisibility ? "visible" : "hidden" }}
    >
      <Title>{title}</Title>
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
