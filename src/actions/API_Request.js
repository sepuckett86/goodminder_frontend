import axios from 'axios';
import { GET_GOODMINDER, POST_GOODMINDER, PUT_GOODMINDER,
  DELETE_GOODMINDER, GET_GOODMINDERS } from './types';
import { POST_SIGNUP } from './types';

export function getGoodminder(goodminder) {
  return {
    type: GET_GOODMINDER,
    payload: goodminder
  }
}

export function postGoodminder(goodminder) {
  return {
    type: POST_GOODMINDER,
    payload: goodminder
  }
}

export function putGoodminder(id) {
  return {
    type: PUT_GOODMINDER,
    payload: id
  }
}

export function deleteGoodminder(id) {
  return {
    type: DELETE_GOODMINDER,
    payload: id
  }
}

export function getGoodminders() {
  return {
    type: GET_GOODMINDERS,
    payload: 'response'
  }
}

export const postSignup = ({ email, password }) => dispatch => {
  axios.post('address', {
    email,
    password
  });
  return {
    type: POST_SIGNUP,
    payload: 'response'
  }
}
