import React, { useState, useEffect } from "react";

import "./App.scss";
import Board from "./components/board";
import Timer from "./components/timer";
import { shuffle } from "./helpers/shuffle";

const path = "./images/";
const initialCards = [
  {
    _id: 1,
    front: `${path}logo.jpg`,
    back: `${path}cross.jpg`,
    type: 1,
  },
  {
    _id: 2,
    front: `${path}logo.jpg`,
    back: `${path}cross.jpg`,
    type: 1,
  },
  {
    _id: 3,
    front: `${path}logo.jpg`,
    back: `${path}icon-spider.jpg`,
    type: 2,
  },
  {
    _id: 4,
    front: `${path}logo.jpg`,
    back: `${path}icon-spider.jpg`,
    type: 2,
  },
  {
    _id: 5,
    front: `${path}logo.jpg`,
    back: `${path}sun-set.jpg`,
    type: 3,
  },
  {
    _id: 6,
    front: `${path}logo.jpg`,
    back: `${path}sun-set.jpg`,
    type: 3,
  },
  {
    _id: 7,
    front: `${path}logo.jpg`,
    back: `${path}pond.jpg`,
    type: 4,
  },
  {
    _id: 8,
    front: `${path}logo.jpg`,
    back: `${path}pond.jpg`,
    type: 4,
  },
  {
    _id: 9,
    front: `${path}logo.jpg`,
    back: `${path}autumn.jpg`,
    type: 5,
  },
  {
    _id: 10,
    front: `${path}logo.jpg`,
    back: `${path}autumn.jpg`,
    type: 5,
  },
  {
    _id: 11,
    front: `${path}logo.jpg`,
    back: `${path}woolf.jpg`,
    type: 6,
  },
  {
    _id: 12,
    front: `${path}logo.jpg`,
    back: `${path}woolf.jpg`,
    type: 6,
  },
  {
    _id: 13,
    front: `${path}logo.jpg`,
    back: `${path}fox.jpg`,
    type: 7,
  },
  {
    _id: 14,
    front: `${path}logo.jpg`,
    back: `${path}fox.jpg`,
    type: 7,
  },
  {
    _id: 15,
    front: `${path}logo.jpg`,
    back: `${path}orange.jpg`,
    type: 8,
  },
  {
    _id: 16,
    front: `${path}logo.jpg`,
    back: `${path}orange.jpg`,
    type: 8,
  },
  {
    _id: 17,
    front: `${path}logo.jpg`,
    back: `${path}cat.jpg`,
    type: 9,
  },
  {
    _id: 18,
    front: `${path}logo.jpg`,
    back: `${path}cat.jpg`,
    type: 9,
  },
  {
    _id: 19,
    front: `${path}logo.jpg`,
    back: `${path}eye.jpg`,
    type: 10,
  },
  {
    _id: 20,
    front: `${path}logo.jpg`,
    back: `${path}eye.jpg`,
    type: 10,
  },
  {
    _id: 21,
    front: `${path}logo.jpg`,
    back: `${path}eagle.jpg`,
    type: 11,
  },
  {
    _id: 22,
    front: `${path}logo.jpg`,
    back: `${path}eagle.jpg`,
    type: 11,
  },
  {
    _id: 23,
    front: `${path}logo.jpg`,
    back: `${path}raccoon.jpg`,
    type: 12,
  },
  {
    _id: 24,
    front: `${path}logo.jpg`,
    back: `${path}raccoon.jpg`,
    type: 12,
  },
  {
    _id: 25,
    front: `${path}logo.jpg`,
    back: `${path}fish.jpg`,
    type: 13,
  },
  {
    _id: 26,
    front: `${path}logo.jpg`,
    back: `${path}fish.jpg`,
    type: 13,
  },
  {
    _id: 27,
    front: `${path}logo.jpg`,
    back: `${path}butterfly.jpg`,
    type: 14,
  },
  {
    _id: 28,
    front: `${path}logo.jpg`,
    back: `${path}butterfly.jpg`,
    type: 14,
  },
  {
    _id: 29,
    front: `${path}logo.jpg`,
    back: `${path}snow-man.jpg`,
    type: 15,
  },
  {
    _id: 30,
    front: `${path}logo.jpg`,
    back: `${path}snow-man.jpg`,
    type: 15,
  },
  {
    _id: 31,
    front: `${path}logo.jpg`,
    back: `${path}minon.jpg`,
    type: 16,
  },
  {
    _id: 32,
    front: `${path}logo.jpg`,
    back: `${path}minon.jpg`,
    type: 16,
  },
  {
    _id: 35,
    front: `${path}logo.jpg`,
    back: `${path}vazovski.jpg`,
    type: 17,
  },
  {
    _id: 36,
    front: `${path}logo.jpg`,
    back: `${path}vazovski.jpg`,
    type: 17,
  },
  {
    _id: 37,
    front: `${path}logo.jpg`,
    back: `${path}sally.jpg`,
    type: 18,
  },
  {
    _id: 38,
    front: `${path}logo.jpg`,
    back: `${path}sally.jpg`,
    type: 18,
  },
];
const congratulation =
  "Congratulate! Remember your time and improve you ability!";

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [dimension, setDimension] = useState(700);
  const [timerDisabled, setTimerDisable] = useState(true);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(() => shuffle(initialCards));
  }, []);

  useEffect(() => {
    setWinner(false);
  }, [cards]);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeBoard);

    return () => window.removeEventListener("resize", () => resizeListener);
  });

  const turnOnTimer = () => {
    setTimerDisable(false);
  };

  const turnOffTimer = () => {
    setTimerDisable(true);
  };

  const handleReplay = () => {
    setCards((prevState) => [...shuffle(prevState)]);
  };

  const resizeBoard = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Are you able to remember all the pairs? :D
      </h1>

      <div style={{ display: "flex", justifyContent: "center", margin: 15 }}>
        <div className="appBtn appBtnStart" onClick={turnOnTimer}>
          Start Game
        </div>

        <Timer isTimerDisabled={timerDisabled} cards={cards} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: winner ? "auto" : 0,
          opacity: winner ? 1 : 0,
        }}
      >
        <div className="appCongratulation">{congratulation}</div>

        <div className="appBtn appBtnReplay" onClick={handleReplay}>
          Replay once more
        </div>
      </div>

      <Board
        cards={cards}
        dimension={dimension}
        turnOffClick={turnOffTimer}
        turnOnClick={turnOnTimer}
        setWinner={setWinner}
      />
    </>
  );
};

export default App;
