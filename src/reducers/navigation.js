import { SET_CURRENT_GM, ADD_PREVIOUS_GM,
  SET_BACK_GM, SET_CURRENT_PROMPT } from 'actions/types';

const initialState = {
    currentGM: {},
    previousGM: [],
    backGM: 0,
    currentPrompt: {},
  };

export default function(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_GM:
      return { ...state, currentGM: action.payload };
    case ADD_PREVIOUS_GM:
      return { ...state, previousGM: [ ...state, action.payload ] };
    case SET_BACK_GM:
      return { ...state, backGM: action.payload };
    case SET_CURRENT_PROMPT:
      return { ...state, currentPrompt: action.payload };
    default:
      return state;
  }
}
