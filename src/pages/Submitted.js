import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import styled from "styled-components";

const Relative = styled.div`
  position: relative;
  left: 30px;
`;

const Submitted = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h1>Congrats, and good luck!</h1>
      <div style={{ width: "400px" }}>
        <RangeSlider
          value={value}
          onChange={(changeEvent) => setValue(changeEvent.target.value)}
          min={0}
          max={4}
          tooltip="off"
          size={"lg"}
          variant={"light"}
        />
      </div>
      <Relative>
        <h1>Agree</h1>
      </Relative>

      <h3>
        You will hear back from us via email on September 7th with your Study
        Buddy.
      </h3>
    </div>
  );
};
export default Submitted;
