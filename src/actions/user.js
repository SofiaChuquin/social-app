import axios from 'axios';

export const LOGIN = 'LOGIN';

export function loginUser(email, password) {
  const instance = axios.create({
    baseURL: 'http://localhost:9000/api/'
  });

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
