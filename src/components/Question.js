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

const Input = styled.input`
  color: #fafafa;
  font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 10px;
  outline: none;
  border-bottom: 1px solid pink;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #d5d5d5;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #d5d5d5;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #d5d5d5;
  }
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
        <Input
          style={{ color: "#fafafa", outline: "#fafafa" }}
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
          placeholder={label}
        />
      </MDBWrapper>

      <Button
        onClick={() => {
          moveSectionDown();
        }}
      >
        {submit ? "Submit" : "Enter"}
      </Button>
    </div>
  );
};

export default Question;
