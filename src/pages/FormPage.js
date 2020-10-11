import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import "../App.css";
import { Banner } from "../components/styles"

export default function FormPage() {
  return (
    <>
      <Header
        title="Form"
        description="Fill out this form to get paired with study buddies in your class at UMich. We only match you with people we know you will vibe with."
      />

      <Banner>Open only for ENGR 100, 101, and 110!</Banner>
      <div className="App">
        <Form />
      </div>
    </>
  );
}
