import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import styled from "styled-components";
import Question from "./Question.js";

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

const Form = () => {
  const [data, setData] = useState({});

  function pushToSheets() {
    console.log(data);
    var formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwg_wYiIAPWHCTfCORy0bHttzkBdWIMZHmlwaeJyagwzsOxOE0/exec",
      { method: "POST", body: formData }
    );
  }

  function onChangeListener(key, value) {
    setData({ ...data, [key]: value });
  }

  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>To start off, what's your full name?</p>

              <MDBWrapper>
                <MDBInput
                  style={{ color: "#fafafa" }}
                  key="name"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      fullpageApi.moveSectionDown();
                    }
                  }}
                  onChange={(e) => {
                    onChangeListener("name", e.target.value);
                  }}
                  value={data["name"]}
                  label="Full Name"
                />
              </MDBWrapper>

              <Button onClick={() => fullpageApi.moveSectionDown()}>Ok</Button>
            </div>

            <div className="section">
              <p>What's your email?</p>

              <MDBWrapper>
                <MDBInput
                  style={{ color: "#fafafa" }}
                  key="email"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      fullpageApi.moveSectionDown();
                    }
                  }}
                  onChange={(e) => {
                    onChangeListener("email", e.target.value);
                  }}
                  value={data["email"]}
                  label="Email"
                />
              </MDBWrapper>

              <Button onClick={() => fullpageApi.moveSectionDown()}>Ok</Button>
            </div>

            <div className="section">
              <p>What's your country?</p>

              <MDBWrapper>
                <MDBInput
                  style={{ color: "#fafafa" }}
                  key="country"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      fullpageApi.moveSectionDown();
                    }
                  }}
                  onChange={(e) => {
                    onChangeListener("country", e.target.value);
                  }}
                  value={data["country"]}
                  label="Country"
                />
              </MDBWrapper>

              <Button onClick={() => fullpageApi.moveSectionDown()}>Ok</Button>
            </div>

            <div className="section">
              <p>Stuff?</p>

              <MDBWrapper>
                <MDBInput
                  style={{ color: "#fafafa" }}
                  key="stuff"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      fullpageApi.moveSectionDown();
                    }
                  }}
                  onChange={(e) => {
                    onChangeListener("stuff", e.target.value);
                  }}
                  value={data["stuff"]}
                  label="Stuff"
                />
              </MDBWrapper>

              <Button onClick={() => pushToSheets()}>Submit</Button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Form;
