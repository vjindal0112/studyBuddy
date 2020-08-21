import React from "react";
import styled from "styled-components";
import logo from "../StudyBuddyLogo.png";

const Button = styled.a`
  border: 4px solid #ffcb05;
  padding: 12px;
  margin: 24px;
  color: #fafafa;

  transition: all 0.5s;
  &:hover {
    background-color: #ffcb05;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
`;

const Logo = styled.img`
  max-width: 300px;
`;

const Section = styled.section`
  height: ${props => props.height};
  text-align: center;
  padding: 20px;
  color: #333;
  background-color: ${props => props.backgroundColor};
`;

const TextDiv = styled.div`
  max-width: 40em;
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
`;

export default function Home() {
  return (
    <>
      <div className="App" style={{ height: "80vh", minHeight: "80vh" }}>
        <Logo src={logo} />
        <Heading>UMich Study Buddy</Heading>
        <Button href="/form">Find Your Buddy</Button>
      </div>
      <Section height="40vh" backgroundColor="#fefefe">
        <TextDiv>
          <h1 style={{textAlign: "center", marginTop: "50px" }}>What is this?</h1>
          <p>
            Everyone knows that the worst way to study is alone. If you have a
            question it's infinitely easier to find an answer when you have a
            friend to figure it out with you.{" "}
          </p>
          <p>
            We created this because while attending Zoom University it is
            impossible to make a friend in classes since Bob is shoving his
            face with crumb cakes with his video off during class.
          </p>
        </TextDiv>
      </Section>
      <Section height="60vh" backgroundColor="#f2f2f2">
        <TextDiv>
          <h1 style={{textAlign: "center", marginTop: "50px" }}>How does it work?</h1>
          <p>
            Once you complete the form (enter your class and some of your study habits), we will let you know your Study Buddy by September 8th.
          </p>
          <p>
            We know that it's pretty hard to study with someone who you aren't friends with so we have also included a few personality questions. We will use this data to match you up so that you can get some As together.
          </p>
          <p>
            All of this data will be completely anonymized and private, so you have nothing to worry about.
          </p>
        </TextDiv>
      </Section>
    </>
  );
}
