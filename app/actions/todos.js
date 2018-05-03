// @flow
// import type { todosStateType } from '../reducers/counter';

// type actionType = {
//   +type: string
// };

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(todo: string) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodoAttempt(todoId: number) {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  };
}
