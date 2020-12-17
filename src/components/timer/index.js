import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./timer.scss";
import { getFormattedTime } from "./../../helpers/formatTime";

const Timer = ({ cards, isTimerDisabled }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (!isTimerDisabled) {
      const intervalId = setInterval(
        () => setTimer((prevState) => prevState + 1),
        1000
      );

      return () => clearInterval(intervalId);
    }
  }, [timer, isTimerDisabled]);

  useEffect(() => setTimer(0), [cards]);

  return (
    <div className="timer">
      <div>{getFormattedTime(timer)}</div>
    </div>
  );
};

Timer.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isTimerDisabled: PropTypes.bool.isRequired,
};

export default Timer;
