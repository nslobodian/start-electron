// @flow
// import type { todosStateType } from '../reducers/counter';

// type actionType = {
//   +type: string
// };

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function increment(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

// export function incrementIfOdd() {
//   return (dispatch: (action: actionType) => void, getState: () => todosStateType) => {
//     const { todos } = getState();

//     if (counter % 2 === 0) {
//       return;
//     }

//     dispatch(increment());
//   };
// }
