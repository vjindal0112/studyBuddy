import React from "react";
import Form from "../components/Form";
import "../App.css";
import { Helmet } from "react-helmet";

import styled, { keyframes } from 'styled-components';

const drop = keyframes`
  0% {
    height: 0px;
    opacity: 0;
  }

  20% {
    height: 40px;
    opacity: 1;
  }

  90% {
    height: 40px;
    opacity: 1;
  }

  100% {
    height: 0px;
    opacity: 0;
    display: none;
  }
`;

const Banner = styled.div`
  position: absolute;
  top:0%;
  width: 100%;
  background-color: #FFCB05;
  color: #00274C;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  animation: ${drop} 6s ease-out;
  opacity: 0;
`

export default function FormPage() {
  return (
    <>
      <Helmet
        title="Form | UMich StudyBuddies"
        meta={[
          {
            name: "description",
            content:
              "Fill out this form to get paired with 2 other study buddies in your class at the University of Michigan. We only match you with people we know you will vibe with.",
          },
          {
            name: "og:title",
            content: "Form | UMich StudyBuddies",
          },
          {
            name: "og:description",
            content:
              "Fill out this form to get paired with 2 other study buddies in your class at the University of Michigan. We only match you with people we know you will vibe with.",
          },
          { name: "og:url", content: "https://umichstudybuddies.com" },
          {
            name: "og:image",
            content: "https://umichstudybuddies.com/SocialSharing.png",
          },
          {
            name: "twitter:url",
            content: "https://umichstudybuddies.com",
          },
          {
            name: "twitter:title",
            content: "Form | UMich StudyBuddies",
          },
          {
            name: "twitter:description",
            content: "Find study buddies in your classes",
          },
          {
            name: "twitter:image",
            content: "https://umichstudybuddies.com/SocialSharing.png",
          },
        ]}
      >
        <link rel="canonical" href="https://umichstudybuddies.com/" />
      </Helmet>

      <Banner>Only open for SM 203!</Banner>
      <div className="App">
        <Form />
      </div>
    </>
  );
}
