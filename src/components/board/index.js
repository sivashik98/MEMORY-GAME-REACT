import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./board.scss";
import Card from "../card";

const COUNT_OF_SECONDS = 3000;
const COUNT_OF_SECONDS_WRONG = 800;

const Board = ({
  cards,
  dimension = 600,
  turnOffClick,
  turnOnClick,
  setWinner,
}) => {
  const [guessed, setGuessed] = useState([]);
  const [temporaryFlipped, setTemporaryFlipped] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const size = dimension / 4.5;

  useEffect(() => {
    if (temporaryFlipped.length === 1) {
      const timerId = setTimeout(() => {
        setTemporaryFlipped(() => []);
      }, COUNT_OF_SECONDS);

      return () => clearTimeout(timerId);
    }

    if (temporaryFlipped.length === 2) {
      const [firstCard, secondCard] = temporaryFlipped;

      if (firstCard.type === secondCard.type) {
        setGuessed((prevState) => [...prevState, firstCard, secondCard]);

        setTemporaryFlipped(() => []);

        setDisabled(() => false);
      } else {
        const timerId = setTimeout(() => {
          setTemporaryFlipped(() => []);

          setDisabled(() => false);
        }, COUNT_OF_SECONDS_WRONG);

        return () => clearTimeout(timerId);
      }
    }
  }, [temporaryFlipped]);

  useEffect(() => {
    setGuessed([]);
    setTemporaryFlipped([]);
    setDisabled(false);
  }, [cards]);

  useEffect(() => {
    if (guessed.length === cards.length) {
      turnOffClick && turnOffClick();
      setWinner && setWinner(true);
    }
  });

  const handleClick = (id, type) => () => {
    setTemporaryFlipped((prevState) => {
      const newState = [...prevState, { id: id, type: type }];

      newState.length === 2 && setDisabled(() => true);

      return newState;
    });
  };

  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card._id}
          isFlipped={temporaryFlipped.some((el) => el.id === card._id)}
          isGuessed={guessed.some((el) => el.id === card._id)}
          isDisabled={disabled || guessed.some((el) => el.id === card._id)}
          width={size}
          height={size}
          front={card.front}
          back={card.back}
          onClick={handleClick(card._id, card.type)}
          turnOnClick={turnOnClick}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})),
  dimension: PropTypes.number.isRequired,
  turnOffClick: PropTypes.func.isRequired,
  turnOnClick: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired,
};

export default Board;
