import axios from 'axios';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const GET_USER = 'GET_USER';

const instance = axios.create({
  baseURL: 'http://localhost:9000/api/'
});

export function loginUser(email, password) {
  const data = {
    email,
    password,
  }

  const request = instance.post('users/sign_in', data)
    .catch(error => error.response);

  return {
    type: LOGIN,
    payload: request,
  }
}

export function createUser(email, name, password) {
  const data = {
    email,
    name,
    password
  }

  const request = instance.post('users/sign_up', data)
    .catch(error => error.response);

  return {
    type: REGISTER,
    payload: request,
  }
}

export function getUser(token) {
  const config = {
    headers: {
      AUTHORIZATION: `Token token=${token}`
    }
  }

  const request = instance.get('users', config)
    .catch(error => error.response);

  return {
    type: GET_USER,
    payload: request,
  }
}
