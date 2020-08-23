import React, { useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";

const Wrapper = styled.div`
  margin: 10px auto;
  width: 40%;
  color: #fafafa !important;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  background-color: #333;
  color: #fafafa;
  border-radius: 5px;
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: "black",
    padding: 20,
  }),
};

const SelectBar = ({
  title,
  label,
  keyName,
  choices,
  moveSectionDown,
  onChange,
}) => {
  useEffect(() => {}, [keyName, choices]);

  return (
    <div className="section">
      <p>{title}</p>
      <Wrapper>
        <Select
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              moveSectionDown();
            }
          }}
          placeholder={label}
          key={keyName}
          styles={customStyles}
          options={choices}
          onChange={(newValue, actionMeta) => {
            if (actionMeta.action === "select-option") {
              onChange(keyName, newValue.value);
            }
          }}
        />
      </Wrapper>

      <Button
        onClick={() => {
          moveSectionDown();
        }}
      >
        Enter
      </Button>
    </div>
  );
};

export default SelectBar;
