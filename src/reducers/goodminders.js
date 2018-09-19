import { SAVE_GOODMINDER } from 'actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_GOODMINDER:
      return [...state, action.payload];
    default:
      return state;
  }
}
