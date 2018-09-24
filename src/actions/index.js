import { SAVE_GOODMINDER, CHANGE_AUTH } from 'actions/types';

export function saveGoodminder(goodminder) {
  return {
    type: SAVE_GOODMINDER,
    payload: goodminder
  }
}

export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
