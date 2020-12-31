import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import Board from "./components/board";
import Timer from "./components/timer";
import { shuffle } from "./helpers/shuffle";
import {CONGRATULATION} from "./constants";
import {initialCards} from "./mock";


const App = () => {
  // const { interaction, warning } = useSelector((state) => state.app);
  // const { posts } = useSelector((state) => state.posts.present);
  // const { topics } = useSelector((state) => state.topics);
  // const dispatch = useDispatch();

  const [cards, setCards] = useState(initialCards);
  const [dimension, setDimension] = useState(700);
  const [timerDisabled, setTimerDisable] = useState(true);
  const [winner, setWinner] = useState(true);

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

        <div className="appBtn appBtnReplay" onClick={handleReplay}>
          Replay once more
        </div>
      </div>

      <div
        style={{
          display: "flex",
          // justifyContent: "center",
          // height: winner ? "auto" : 0,
          // opacity: winner ? 1 : 0,
        }}
      >
        <div className="appCongratulation">{CONGRATULATION}</div>


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
