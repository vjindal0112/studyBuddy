import React, { Component } from "react";
import SearchPage from "../components/SearchPage.js";
import { MDBInput } from "mdbreact";
import Select from "react-select";
import styled from "styled-components";

const options = [
  { value: "Architecture (ARCH) 466", label: "Architecture (ARCH) 466" },
  { value: "eecs 280", label: "EECS 280" },
  { value: "econ 101", label: "Econ 101" },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  control: (_, { selectProps: { width } }) => ({
    width: width,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

class Submitted extends Component {
  render() {
    return (
      <div className="App">
        <h1>Congrats, and good luck!</h1>
        <div class style={{ width: "400px", color: "black" }}>
          <Select
            options={options}
            style={customStyles}
            width="200px"
            menuColor="red"
          />
        </div>
        <h3>
          You will hear back from us via email on September 7th with your Study
          Buddy.
        </h3>
      </div>
    );
  }
}
export default Submitted;
