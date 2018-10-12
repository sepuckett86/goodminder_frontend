// NOTE: this is the file that must be altered to work with back end

import axios from 'axios';
import { GET_GOODMINDER, POST_GOODMINDER, PUT_GOODMINDER,
  DELETE_GOODMINDER, GET_GOODMINDERS, CHANGE_AUTH } from './types';
import { POST_SIGNUP, POST_LOGIN, POST_RESET } from './types';

const baseURL = '';

export function getGoodminder(id) {
  axios.get(baseURL + `api/gminders/${id}`)
  return {
    type: GET_GOODMINDER,
    payload: 'response'
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

export const postSignup = ( email, password ) => {
  // const response = axios.post(baseURL + 'api/auth/signup', {
  //  email,
  //  password
  //});
  let response = 'placeholder'
  return {
    type: POST_SIGNUP,
    payload: response
  }
}

export const postLogin = ( {email, password} ) => {
  // const response = axios.post(baseURL + 'api/auth/signup', {
  //  email,
  //  password
  //});
  // ALWAYS logs in
  let response = true;
  return {
    type: CHANGE_AUTH,
    otherType: POST_LOGIN,
    payload: response
  }
}

export const postReset = ( email ) => {
  // const response = axios.post(baseURL + 'api/auth/signup', {
  //  email,
  //  password
  //});
  // ALWAYS logs in
  let response = true;
  return {
    type: POST_RESET,
    payload: response
  }
}
