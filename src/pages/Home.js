import React from 'react'
import styled from 'styled-components';
import logo from "../StudyBuddyLogo.png"

const Button = styled.a`
  border: 4px solid #FFCB05;
  padding: 12px;
  margin: 24px;
  color: #fafafa;

  transition: all .5s;
  &:hover {
    background-color: #FFCB05;
  }
`;

const Heading = styled.h1`
  font-size: 60px;
`;

const Logo = styled.img`
  max-width: 300px;

`


export default function Home() {
  return (
    <div className="App" style={{height: "80vh", minHeight: "80vh"}}>
      <Logo src={logo} /> 
      <Heading>UMich Study Buddy</Heading>
      <Button href="/form">Find Your Buddy</Button>
    </div>
  )
}
