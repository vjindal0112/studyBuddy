import React, { useState, useCallback } from "react";
import { useTransition, animated, useSpring } from "react-spring";
import { MDBInput } from "mdbreact";
import Select from "react-select";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

const options = [
  { value: "america", label: "america" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: 220px;
  top: 220px;
  .md-form {
    width: 50%;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  z-index: 100;
  position: absolute;
  right: 0;
`;

const FormWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const styleDiv = {
  width: "80%",
  height: "100%",
  margin: "0 auto",
  position: "absolute",
  boxSizing: "border-box",
};

const ProgressBar = styled.div`
  width: 80%;
  position: fixed;
  top: 20px;

  .MuiLinearProgress-colorPrimary {
    background-color: #888;
  }

  .MuiLinearProgress-bar1Determinate {
    background-color: #66dd99;
  }
`;

export default function Form() {
  const [index, setIndex] = useState(0);
  const [data, setData] = useState({});
  const [currentInputVal, setCurrentInputVal] = useState("");
  const items = [
    {
      label: "Luke Skywalker",
      value: "Luke Skywalker",
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" },
  ];

  function CharacterDropDown() {
    return (
      <select>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    );
  }

  const keys = ["name", "email", "country"];

  const props = useSpring({
    to: [
      { opacity: 0, color: "rgb(14,26,19)" },
      { opacity: 1, color: "#ffaaee" },
    ],
    from: { opacity: 1, color: "red" },
  });

  const pages = [
    ({ style }) => (
      <InputWrapper>
        <animated.div key="animated1" style={{ ...style }}>
          {" "}
          <MDBInput
            onChange={(e) => {
              setCurrentInputVal(e.target.value);
            }}
            value={currentInputVal}
            key={1}
            label="Name"
            style={{ width: "50%" }}
          />{" "}
        </animated.div>
      </InputWrapper>
    ),
    ({ style }) => (
      <InputWrapper>
        <animated.div style={{ ...style }}>
          {" "}
          <MDBInput key={index} label="Email" style={{ width: "50%" }} />{" "}
        </animated.div>
      </InputWrapper>
    ),
    ({ style }) => (
      <InputWrapper>
        <animated.div style={{ ...style }}>
          <MDBInput
            key={index}
            label="Country"
            width="50%"
            onChange={CharacterDropDown}
          />
        </animated.div>
      </InputWrapper>
    ),
  ];

  const labels = ["Name", "Email", "Country"];
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50%,0)" },
  });

  function pushToSheets() {
    let submission = new FormData();
    for (var key in data) {
      submission.append(key, data[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwg_wYiIAPWHCTfCORy0bHttzkBdWIMZHmlwaeJyagwzsOxOE0/exec",
      { method: "POST", body: submission }
    );
  }

  return (
    <>
      <ProgressBar>
        <LinearProgress
          variant="determinate"
          value={index * (100 / pages.length)}
          color="primary"
        />
      </ProgressBar>
      <Wrapper
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            let idx = (index + 1) % 3;
            setIndex(idx);
            data[keys[idx]] = "";
          }
        }}
      >
        <animated.div style={props}>
          <MDBInput
            key={index}
            label={labels[index]}
            style={{ width: "50%" }}
          />{" "}
        </animated.div>
      </Wrapper>

      <FormWrapper
        className="simple-trans-main"
        key="formWrapper"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // onClick();
          }
        }}
      >
        {transitions.map(({ item, props, key }) => {
          console.log(key);
          const Page = pages[item];
          return <Page key={key} style={{ ...props, ...styleDiv }} />;
        })}
      </FormWrapper>
    </>
  );
}
