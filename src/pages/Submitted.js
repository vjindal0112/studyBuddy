import React from "react";
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Texth4 = styled.h4`
  max-width: 50%;
  @media(max-width: 768px) {
    max-width: 90%;
  }
`;

const Button = styled.a`
  border: 4px solid #ffcb05;
  margin-top: 8px;
  padding: 4px 8px;
  color: #fafafa;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0);

  transition: all 0.5s;
  &:hover {
    background-color: #ffcb05;
  }
`;

const Submitted = () => {
  return (
    <>
      <Helmet
        title="UMich StudyBuddies"
        meta={[
          {
            name: "description",
            content:
              "Get paired with 2 other study friends in your class at the University of Michigan. We only match you with people we know you will vibe with.",
          },
          {
            name: "og:title",
            content: "UMich StudyBuddies",
          },
          {
            name: "og:description",
            content: "Find study friends in your classes",
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
            content: "UMich StudyBuddies",
          },
          {
            name: "twitter:description",
            content: "Find study friends in your classes",
          },
          {
            name: "twitter:image",
            content: "https://umichstudybuddies.com/SocialSharing.png",
          },
        ]}
      >
        <link rel="canonical" href="https://umichstudybuddies.com/" />
      </Helmet>
      <div className="App">
        <h1>Congrats, and good luck!</h1>
        <Texth4>
          You will hear back from us via email on September 5th with your StudyBuddies. Remember to fill out the form multiple times for multiple classes.
        </Texth4>
        <Button href="/form">
          Another Class
        </Button>
      </div>
    </>
  );
};
export default Submitted;
