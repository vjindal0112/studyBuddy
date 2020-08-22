import React, { useState, useEffect,  } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import styled from "styled-components";

const Left = styled.h5`
  position: relative;
  left: -232px;
  top: 36px;
  display: inline;
`;

const Right = styled.h5`
  position: relative;
  right: -200px;
  top: 36px;
  display: inline;
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

const Wrapper= styled.div`
  text-align: center;
  margin: 0 auto;
`

const Slider = ({ title, keyName, moveSectionDown, onChange }) => {
  const [value, setValue] = useState("");

  useEffect(() => {}, [keyName]);

  return (
    <div className="section">
      <p>{title}</p>
      <Wrapper
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            moveSectionDown();
          }
        }}
        style={{ width: "400px" }}
      >
        <Left>Disagree</Left>
        <Right>Agree</Right>
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
