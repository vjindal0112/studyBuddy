import React, { useState } from "react";
import "./App.css";
import GapiPage from "./components/form1";
import styled from "styled-components";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="App">
      <Form />
      <GapiPage />
    </div>
  );
};

export default App;
