// @flow
import { ADD_TODO, REMOVE_TODO } from '../actions/todos';

const TODO_KEY = 'TODO_KEY';

export type Todo = {
  title: string,
  id: number,
  completed: boolean
};

export type todosStateType = {
  todos: Todo[]
};

type actionType = {
  +type: string,
  payload?: object
};

const initialState = {
  todos: JSON.parse(localStorage.getItem(TODO_KEY)) || []
};

export default function todos(state: todosStateType = initialState, action: actionType) {
  switch (action.type) {
    case ADD_TODO:
      state.todos.push({
        title: action.payload,
        completed: false,
        id: state.todos.length,
      });
      localStorage.setItem(TODO_KEY, JSON.stringify(state.todos));
      return state;
    case REMOVE_TODO:
      return { todos: state.todos.filter(({ id }) => action.payload !== id) };
    default:
      return state;
  }
}
