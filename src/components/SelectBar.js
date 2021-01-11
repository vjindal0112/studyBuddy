import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Select from "react-select";
import { QuestionButton } from "./styles";
// import ListItem from "./ListItem";

const Wrapper = styled.div`
  margin: 20px auto;
  width: 40%;
  color: #fafafa !important;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Input = styled.input`
  font-size: 16px;
  padding: 12px;
  background-color: #fff;
  width: 40%;
  display: flex;
  margin: 0 auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  outline: none;
  :focus {
    border-radius: 0px;
  }
  @media (max-width: 768px) {
    width: 80%;
    padding: 12px;
  }
`;

const QuestionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ListItem = styled.div`
  border: 1px solid #ddd;
  border-top-width: 0;
  background-color: #fff;
  color: #333;
  padding: 20px;
  /* width: 40%; */
  margin: 0 auto;
  z-index: 3;
  /* display: block; */
  transition: all 200ms;
  text-align: left;
  font-size: 16px;
  position: relative;
  :hover {
    background-color: #efefff;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: "black",
    padding: 20,
  }),
};

const ListItemContainer = styled.div`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  width: 40%;
`;

const InnerListItemContainer = styled.div`
  margin: 0 auto;
  width: 40%;
  overflow-y: auto;
  max-height: 30vh;
`;

const SelectBar = ({
  title,
  label,
  keyName,
  choices,
  moveSectionDown,
  onChange,
  initial,
  reset,
}) => {
  const [focused, setFocused] = useState(false);
  const [listFocused, setListFocused] = useState(false);

  useEffect(() => {}, [keyName, choices, initial, reset]);

  return (
    <div className="section">
      <QuestionWrapper>
        <p>{title}</p>
      </QuestionWrapper>
      <Wrapper>
        {console.log(initial)}
        <Input
          type="input"
          placeholder={label}
          onChange={(e) => onChange(keyName, e.target.value)}
          value={initial}
          onFocus={(e) => setFocused(true)}
          // onBlur={(e) => !listFocused ? setFocused(false) : null}
          // onClick={() => {
          //   ReactGA.event({
          //     category: "Search",
          //     action: "Click",
          //   });
          //   // amplitude.getInstance().logEvent("Search", {
          //   //   action: "Click",
          //   // });
          // }}
        />

        <ListItemContainer>
          <InnerListItemContainer
            onMouseOver={(e) => setListFocused(true)}
            onMouseOut={(e) => setListFocused(false)}
          >
            {focused
              ? choices
                  .filter((obj) => {
                    {
                      /* if (obj.value == initial) {
                      setListFocused(false);
                    } */
                    }
                    return obj.value
                      .toLowerCase()
                      .includes(initial.toLowerCase());
                  })
                  .map((obj, index) => (
                    <React.Fragment key={index}>
                      {index < 20 ? (
                        <ListItem
                          // noGroupMe={false}
                          key={index}
                          onClick={(e) => {
                            onChange(keyName, obj.value);
                            setFocused(false);
                          }}
                        >
                          {obj.value}
                        </ListItem>
                      ) : null}
                    </React.Fragment>
                  ))
              : null}
          </InnerListItemContainer>
        </ListItemContainer>
        <QuestionButton
          onClick={() => {
            moveSectionDown();
          }}
        >
          Enter
        </QuestionButton>
      </Wrapper>
    </div>
  );
};

export default SelectBar;
