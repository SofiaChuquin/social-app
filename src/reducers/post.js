import { CREATE_POST, GET_POSTS, EDIT_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_POST:
      return action.payload.data;
    case GET_POSTS:
      return action.payload.data;
    case EDIT_POST:
      return action.payload.data;
    case DELETE_POST:
      return action.payload.data;
    default:
      return state;
  }
}
