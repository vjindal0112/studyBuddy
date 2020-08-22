import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Question from "./Question";
import { withRouter } from "react-router-dom";
import SelectBar from "./SelectBar";
import Slider from "./Slider";

const Form = ({ history }) => {
  const [data, setData] = useState({});

  const keys = ["name", "class", "email", "time_zone", "personality", "stuff"];

  function pushToSheets() {
    console.log(data);
    var formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }

    // UNCOMMENT to check for all filled in
    // for (var i= 0; i < keys.length; i++) {
    //   if(!data[keys[i]]) {
    //     alert("Please fill in all fields");
    //     return;
    //   }
    // }

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
            <Slider
              title="How much do you like pumpkins?"
              keyName={keys[4]}
              moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
              onChange={onChangeListener}
            />
            <Question
              title="To start off, what's your full name?"
              label="Full Name"
              keyName={keys[0]}
              moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
              onChange={onChangeListener}
            />
            <SelectBar
              title="What class are you in?"
              label="Class"
              keyName={keys[1]}
              moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
              onChange={onChangeListener}
            />

            <Question
              title="What's your email"
              label="Email"
              keyName={keys[2]}
              moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
              onChange={onChangeListener}
            />

            <Question
              title="What's your time zone"
              label="Time Zone"
              keyName={keys[3]}
              moveSectionDown={fullpageApi && fullpageApi.moveSectionDown}
              onChange={onChangeListener}
            />
            <Question
              title="Stuff?"
              label="Stuff"
              keyName={keys[5]}
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
