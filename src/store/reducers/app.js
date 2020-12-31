import {
  DISABLE_INTERACTION,
  ENABLE_INTERACTION,
  SHOW_WINNER,
  HIDE_WINNER,
} from "../constants";

const initialState = {
  interaction: true,
  winner: null,
};

const handleApp = (state = initialState, action) => {
  if (action.type === DISABLE_INTERACTION) {
    return { ...state, interaction: false };
  }

  if (action.type === ENABLE_INTERACTION) {
    return { ...state, interaction: true };
  }

  if (action.type === SHOW_WINNER) {
    return { ...state, winner: true };
  }

  if (action.type === HIDE_WINNER) {
    return { ...state, winner: false };
  }

  return state;
};

export default handleApp;
