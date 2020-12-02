import React, { useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Texth4 = styled.h4`
  max-width: 50%;
  font-size: 20px;
  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 20px;
  }
`;

const Texth1 = styled.h4`
  max-width: 50%;
  font-size: 40px;
  @media (max-width: 768px) {
    max-width: 90%;
    font-size: 32px;
    font-weight: 300;
  }
`;

const Feedback = () => {
  let url = useLocation();

  useEffect(() => {
    pushEmailToSheets();
  });

  function pushEmailToSheets() {
    var formData = new FormData();

    if (url.search != "") {
      formData.append(
        "uniqname",
        url.search
          .substr(1, url.search.indexOf("&") - 1)
          .toLowerCase()
          .trim()
      );
      formData.append(
        "vote",
        url.search
          .substr(url.search.indexOf("&") + 1)
          .toLowerCase()
          .trim()
      );
    }
    fetch(
      "https://script.google.com/macros/s/AKfycbwl6I3TSSgQNrPMf4zc4dvsDPwoXfCQy2TecImRxuvb7QA-NzuT/exec",
      { method: "POST", body: formData }
    );
    return true;
  }

  return (
    <>
      <Header title="Feedback" />
      <div className="App" style={{ padding: "4px" }}>
        <Texth1>You've been added to the raffle!</Texth1>
        <Texth4>
          We'll use your feedback to adjust and improve the Studybuddies matches
          for next semester. <br /> See you then!
        </Texth4>
      </div>
    </>
  );
};
export default Feedback;
