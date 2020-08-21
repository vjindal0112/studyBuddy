import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import styled from "styled-components";

const MDBWrapper = styled.div`
  margin: 10px auto;
  width: 40%;
  color: #fafafa !important;

  @media (max-width: 768px) {
    width: 90%;
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

const Question = ({
  title,
  label,
  keyName,
  moveSectionDown,
  onChange,
  submit,
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {}, [keyName]);

  return (
    <div className="section">
      <p>{title}</p>
      <MDBWrapper>
        <MDBInput
          style={{ color: "#fafafa" }}
          key={keyName}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              moveSectionDown();
            }
          }}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(keyName, e.target.value);
          }}
          value={value}
          label={label}
        />
      </MDBWrapper>

      <Button
        onClick={() => {
          moveSectionDown();
        }}
      >
        {submit ? "Submit" : "Ok"}
      </Button>
    </div>
  );
};

export default Question;
