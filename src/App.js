import React, { useState } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import { LinearProgress } from "@material-ui/core";
import FormPage from "./components/form1";
import styled from "styled-components";

const NextButton = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  color: #333;
`;

const ProgressBar = styled.div`
  width: 40%;
`;

const App = () => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [key, setKey] = useState(0);
  const [progress, setProgress] = useState(0);

  const variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const test = [
    ["This is the heading 1", <input placeholder="yeet"></input>],
    ["This is the heading 2", <input placeholder="second"></input>],
    ["This is the heading 3", <input placeholder="third"></input>],
  ];

  const nextOne = (newDirection) => {
    console.log(
      index +
        " ||| " +
        newDirection +
        " ||| " +
        test.length +
        " ||| " +
        test[index]
    );
    setKey(key + newDirection);
    setProgress(((index + newDirection) / 3) * 100);
    setIndex([
      (((index + newDirection) % test.length) + test.length) % test.length,
      newDirection,
    ]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <FormPage />
        </div>
        <ProgressBar>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="primary"
          />
        </ProgressBar>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={key}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 1000, damping: 2000 },
              opacity: { duration: 0.8 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                nextOne(1);
              } else if (swipe > swipeConfidenceThreshold) {
                nextOne(-1);
              }
            }}
          >
            <h2>{test[index][0]}</h2>
            {test[index][1]}
          </motion.div>
        </AnimatePresence>
        <NextButton
          style={{ left: "10px", transform: "scale(-1)" }}
          onClick={() => {
            nextOne(-1);
          }}
        >
          {"‣"}
        </NextButton>
        <NextButton
          style={{ right: "10px" }}
          onClick={() => {
            nextOne(1);
          }}
        >
          {"‣"}
        </NextButton>
      </header>
    </div>
  );
};

export default App;
