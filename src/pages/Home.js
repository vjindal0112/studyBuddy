import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../StudyBuddyLogo.png";
import Header from "../components/Header";
import CountUp from "react-countup";
import { Button, UserCount, Banner } from "../components/styles"; // styles used for shared styles
import ReactGA from "react-ga";
import { collegeDark, collegeLight } from "../constants";

const Heading = styled.h1`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  padding: 10px;
  font-weight: 400;
`;

const Section = styled.section`
  text-align: center;
  padding: ${(props) => props.padding};
  color: #333;
  background-color: ${(props) => props.backgroundColor};
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
  margin-left: 10px;
`;

const OuterFlex = styled.div`
  max-width: 30em;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  @media (min-width: 550px) {
    padding-left: 50px;
  }
`;

const BulletText = styled.div`
  margin-left: 20px;
  font-size: 24px;
  color: black;
  display: flex;
  text-align: left;
`;

const Logo = styled.img`
  max-height: 40vh;
  margin-top: 30px;
`;

const TextDiv = styled.div`
  max-width: 40em;
  margin: 0 auto;
  font-size: 18px;
  text-align: justify;
  text-justify: inter-word;
`;

const BulletPoints = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  background-color: ${collegeDark};
  font-size: 25px;
  text-align: center;
  font-weight: 500;
  color: white;
  flex-shrink: 0;
`;

export default function Home() {
  const [userCount, setUserCount] = useState(6500);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxP3gykUXOcNunlc7uvzvwPiBcL1h44XzxSjsn3Vvu1vW0XB7U/exec"
    )
      .then((snapshot) => snapshot.json())
      .then((num) => setUserCount(parseInt(num.number)));
  });

  return (
    <>
      <Header />
      <div className="App" style={{ height: "88vh", minHeight: "88vh" }}>
        <Logo src={logo} />
        <Heading>UMich StudyBuddies</Heading>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        >
          <div>Join</div>
          <UserCount>
            <CountUp start={6500} end={userCount} />
          </UserCount>
          <div>Wolverines</div>
        </div>
        <Button
          onClick={() => {
            ReactGA.event({
              category: "Navigation",
              action: "Click",
              label: "Find your Buddy",
            });
          }}
          href="/form"
        >
          Find your Buddies
        </Button>
      </div>
      <Section padding="20px" backgroundColor="#fefefe">
        <h1 style={{ textAlign: "center" }}>How it works</h1>
        <OuterFlex>
          <Flex>
            <BulletPoints>1</BulletPoints>
            <BulletText>Fill out a 60 second form</BulletText>
          </Flex>
          <br />
          <Flex>
            <BulletPoints>2</BulletPoints>
            <BulletText>Get your buddies Oct. 18</BulletText>
          </Flex>
          <br />
          <Flex>
            <BulletPoints>3</BulletPoints>
            <BulletText>Make your group chat!</BulletText>
          </Flex>
        </OuterFlex>
      </Section>
      <Section padding="50px" backgroundColor="#f2f2f2">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>Get connected</h1>
          <p>
            We match you with a group of 4 people based on your study habits,
            interests, and club affiliations. You’ll only be matched with people
            in your class.
          </p>
          <p>
            All of this data will be completely private, so you have nothing to
            worry about.
          </p>
        </TextDiv>
      </Section>
      <Section padding="50px" backgroundColor="#fefefe">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>We make it easy</h1>

          <p>
            Zoom University makes it really hard to find friends in your
            classes. We’ll faciliate a group chat for you so it’s easy to reach
            out.{" "}
          </p>
        </TextDiv>
      </Section>
      <Section padding="50px" backgroundColor="#f2f2f2">
        <TextDiv>
          <h1 style={{ textAlign: "center" }}>FAQ</h1>

          <p>
            <b>Can I fill the form out for more than one class?</b>
          </p>
          <p>
            Yes! You’re encouraged to. We’d love to give you a group of
            studybuddies for every class you’re taking this quarter.
          </p>
          <p>
            <b>When is the last day I can fill this out?</b>
          </p>
          <p>
            The form will close on October 16th at noon because we want to get
            you your StudyBuddies by October 18th.
          </p>
          <p>
            <b>Where can I find more information?</b>
          </p>
          <p>
            Check out our medium post here:{" "}
            <a href="https://medium.com/@vjindal0112/why-we-made-studybuddies-493beda5d8f7">
              Why We Made StudyBuddies
            </a>
          </p>
        </TextDiv>
      </Section>
    </>
  );
}
