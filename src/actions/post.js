import axios from 'axios';

export const CREATE_POST = 'CREATE_POST';
export const GET_POSTS = 'GET_POSTS';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';

const instance = axios.create({
  baseURL: 'http://localhost:9000/api/'
});

export function createPost(values, token) {
  const data = { ...values };

  const config = {
    headers: {
      AUTHORIZATION: `Token token=${token}`
    }
  }

  const request = instance.post('posts', data, config)
    .catch(error => error.response);

  return {
    type: CREATE_POST,
    payload: request,
  };
}

export function getPosts(token) {
  const config = {
    headers: {
      AUTHORIZATION: `Token token=${token}`
    }
  }

  const request = instance.get('posts', config)
    .catch(error => error.response);

  return {
    type: GET_POSTS,
    payload: request,
  };
}

export function editPost(values, token, id) {
  const config = {
    headers: {
      AUTHORIZATION: `Token token=${token}`
    }
  }

  const data = { ...values };

  const request = instance.put(`posts/${id}`, data, config)
    .catch(error => error.response);

  return {
    type: EDIT_POST,
    payload: request,
  };
}

export function deletePost(token, id) {
  const config = {
    headers: {
      AUTHORIZATION: `Token token=${token}`
    }
  }

  const request = instance.delete(`posts/${id}`, config)
    .catch(error => error.response);

  return {
    type: DELETE_POST,
    payload: request,
  };
}
