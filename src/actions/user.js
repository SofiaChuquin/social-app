import axios from 'axios';

export const LOGIN = 'LOGIN';

export function loginUser(email, password) {
  const instance = axios.create({
    baseURL: 'https://mighty-atoll-46015.herokuapp.com/api/'
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
