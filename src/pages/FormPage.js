import React from "react";
import Form from "../components/Form";
import "../App.css";
import { Helmet } from "react-helmet";

export default function FormPage() {
  return (
    <>
      <Helmet
        title="Form | UMich StudyBuddies"
        meta={[
          {
            name: "description",
            content:
              "Fill out this form to get paired with 2 other study friends in your class at the University of Michigan. We only match you with people we know you will vibe with.",
          },
          {
            name: "og:title",
            content: "Form | UMich StudyBuddies",
          },
          {
            name: "og:description",
            content:
              "Fill out this form to get paired with 2 other study friends in your class at the University of Michigan. We only match you with people we know you will vibe with.",
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
        <Form />
      </div>
    </>
  );
}
