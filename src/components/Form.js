import React, { useState, useCallback } from "react";
import { useTransition, animated } from "react-spring";
import { MDBInput } from "mdbreact";
import { LinearProgress } from "@material-ui/core";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  .md-form {
    width: 50%;
    margin: 0 auto;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;

`

const styleDiv = {
  width: "80%",
  height: "100%",
  margin: "0 auto",
  position: "absolute",
  boxSizing: "border-box",
};

const pages = [
  ({ style }) => (
    <InputWrapper>
      <animated.div style={{ ...style }}>
        {" "}
        <MDBInput label="Username" style={{ width: "25%" }} />{" "}
        <MDBInput label="Password" style={{ width: "25%" }} />
      </animated.div>
    </InputWrapper>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <MDBInput label="Name" width="50%" />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <MDBInput label="Email" width="50%" />
    </animated.div>
  ),
];

const ProgressBar = styled.div`
  width: 80%;
  position: fixed;
  top: 0;

  .MuiLinearProgress-colorPrimary {
    background-color: #888;
  }

  .MuiLinearProgress-bar1Determinate {
    background-color: #66dd99;
  }
`;


export default function Form() {
  const [index, setIndex] = useState(0);
  const onClick = useCallback(() => setIndex((state) => (state + 1) % 3), []);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(0,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-50%,0)" },
  });

  function pushToSheets() {
    const submission = {
      name: "Varun",
      email: "vjindal0112@gmail.com"
    };
    var data = new FormData();
    for (var key in submission) {
      data.append(key, submission[key]);
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbwg_wYiIAPWHCTfCORy0bHttzkBdWIMZHmlwaeJyagwzsOxOE0/exec",
      { method: "POST", body: data }
    )

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
      <FormWrapper
        className="simple-trans-main"
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            onClick();
            pushToSheets();
          }
        }}
      >
        {transitions.map(({ item, props, key }) => {
          console.log(props);
          const Page = pages[item];
          return <Page key={key} style={{ ...props, ...styleDiv }} />;
        })}
      </FormWrapper>
    </>
  );
}
