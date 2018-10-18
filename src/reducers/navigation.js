import { SET_CURRENT_GM, ADD_PREVIOUS_GM,
  SET_BACK_GM, SET_CURRENT_PROMPT } from 'actions/types';

const initialState = {
    currentGM: {},
    previousGM: [],
    backGM: 0,
    currentPrompt: {},
  };

export default function(state = [], action) {
  switch(action.type) {
    case SET_CURRENT_GM:
      return { ...state, currentGM: action.payload };
    case ADD_PREVIOUS_GM:
      return { ...state, previousGM: [ ...state, action.payload ] };
    default:
      return state;
  }
}
