import { POST_SIGNUP, POST_LOGIN } from 'actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case POST_SIGNUP:
      return action.payload;
    case POST_LOGIN:
      return action.payload;
    default:
      return state;
  }
}
