import axios from 'axios';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

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

export function createUser(values) {
  const data = {
    values
  }

  const request = instance.post('users/sign_up', data)
    .catch(error => error.response);

  return {
    type: REGISTER,
    payload: request,
  }
}
