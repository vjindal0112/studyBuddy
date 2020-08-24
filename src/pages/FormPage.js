import React from 'react';
import Form from '../components/Form';
import "../App.css";
import { Helmet } from 'react-helmet';

export default function FormPage() {
  return (
    <>
    <Helmet
        title="UMich StudyBuddies | Form"
        meta={[
          {
            name: "description",
            content:
              "Get paired with 2 other study friends in your class at the University of Michigan. We only match you with people we know you will vibe with.",
          },
          {
            name: "og:title",
            content: "UMich StudyBuddies | Form",
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
            content: "UMich StudyBuddies | Form",
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
      <Form/>
    </div>
    </>
  )
}
