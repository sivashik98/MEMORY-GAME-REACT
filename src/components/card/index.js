import React from "react";
import PropTypes from "prop-types";

import "./card.scss";

const Card = ({
  isFlipped,
  isGuessed,
  isDisabled,
  width,
  height,
  back,
  front,
  onClick,
  turnOnClick,
}) => {
  const handleClick = () => {
    onClick && !isDisabled && onClick();
    turnOnClick && turnOnClick();
  };

  return (
    <div className="card" onClick={handleClick} style={{ width, height }}>
      <img
        className={`cardFront ${(isFlipped || isGuessed) && "cardFlipped"}`}
        src={front}
      />

      <img
        className={`cardBack ${(isFlipped || isGuessed) && "cardFlippedBack"}`}
        src={back}
      />
    </div>
  );
};

Card.propTypes = {
  isFlipped: PropTypes.bool.isRequired,
  isGuessed: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  back: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  turnOnClick: PropTypes.func.isRequired,
};

export default Card;
