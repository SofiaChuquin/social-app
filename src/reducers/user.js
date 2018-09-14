import { LOGIN, REGISTER } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload.data;
    case REGISTER:
      return action.payload.data;
    default:
      return state;
  }
}
