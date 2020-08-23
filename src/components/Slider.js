import React, { useState, useEffect } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import styled from "styled-components";

const Left = styled.h5`
  position: relative;
  left: -232px;
  top: 39px;
  display: inline;
  @media (max-width: 768px) {
    left: -96px;
    top: 34px;
    font-size: 14px;
  }
`;

const Right = styled.h5`
  position: relative;
  right: -204px;
  top: 39px;
  display: inline;
  @media (max-width: 768px) {
    right: -75px;
    top: 34px;
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  background-color: #333;
  color: #fafafa;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  width: 400px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const Slider = ({
  title,
  keyName,
  leftText,
  rightText,
  moveSectionDown,
  onChange,
}) => {
  const [value, setValue] = useState(2);

  useEffect(() => {
    onChange(keyName, value);
  }, [keyName]);

  return (
    <div className="section">
      <p>{title}</p>
      <Wrapper
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            moveSectionDown();
          }
        }}
      >
        <Left>{leftText}</Left>
        <Right>{rightText}</Right>
        <RangeSlider
          key={keyName}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(keyName, e.target.value);
          }}
          value={value}
          min={0}
          max={4}
          tooltip="off"
          size={"lg"}
          variant={"light"}
        />
      </Wrapper>

      <Button
        onClick={() => {
          moveSectionDown();
        }}
      >
        Enter
      </Button>
    </div>
  );
};

export default Slider;
