// @flow
import { ADD_TODO } from '../actions/todos';

export type todosStateType = {
  todos: string[]
};

type actionType = {
  +type: string
};

const initialState = {
  todos: [
    'new',
    'add',
    'something'
  ],
};

export default function todos(state: todosStateType = initialState, action: actionType) {
  switch (action.type) {
    case ADD_TODO:
      return state.todos.push(action.payload);
    default:
      return state;
  }
}
