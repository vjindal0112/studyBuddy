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

const Question = ({ key, fullpageApi, onChange }) => {
  const [value, setValue] = useState("");

  useEffect(() => {}, [key]);

  return (
    <>
      {key && (
        <div className="section">
          <p>{key}</p>

          <MDBWrapper>
            <MDBInput
              style={{ color: "#fafafa" }}
              key={key}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fullpageApi.moveSectionDown();
                }
              }}
              onChange={(e) => {
                setValue(e.target.value);
                onChange(key, e.target.value);
              }}
              value={value}
              label={key}
            />
          </MDBWrapper>

          <Button onClick={() => fullpageApi.moveSectionDown()}>Ok</Button>
        </div>
      )}
    </>
  );
};

export default Question;
