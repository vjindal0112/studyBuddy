import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import styled from "styled-components";
import Question from "./Question.js";
import { withRouter } from "react-router-dom";

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

const Form = ({ history }) => {
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
    history.push("/submitted");
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
            <Question
              title="To start off, what's your full name?"
              label="Full Name"
              keyName="name"
              moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
              onChange={onChangeListener}
            />

            <Question
              title="What's your email"
              label="Email"
              keyName="email"
              moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
              onChange={onChangeListener}
            />

            <Question
              title="What's your time zone"
              label="Time Zone"
              keyName="time_zone"
              moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
              onChange={onChangeListener}
            />

            <Question
              title="Stuff?"
              label="Stuff"
              keyName="stuff"
              moveSectionDown={pushToSheets}
              onChange={onChangeListener}
              submit={true}
            />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default withRouter(Form);
