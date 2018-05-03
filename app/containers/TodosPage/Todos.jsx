// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import s from './Todo.css';
import urls from '../../utils/urls';
import type { Todo } from '../../reducers/todos';

type Props = {
  todos: Todo[],
  addTodo: (string) => void,
  deleteTodoAttempt: (number) => void
};

type State = {
  newTodo: string
};

export default class Todos extends Component<Props, State> {
  static defaultProps = {
    todos: [],
  }
  static state = {
    newTodo: ''
  }

  handleChange = (newTodo: string) => {
    this.setState({ newTodo });
  }

  addNewTodo = () => {
    const { newTodo } = this.state;
    if (newTodo && newTodo.trim()) {
      this.props.addTodo(newTodo);
    }

    this.setState({ newTodo: '' });
  }

  deleteTodo = (id: number) => () => {
    this.props.deleteTodoAttempt(id);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Todos</h2>
          <div>
            <input
              type="text"
              onChange={e => this.handleChange(e.target.value)}
              name="new"
              value={this.state ? this.state.newTodo : ''}
            />
            <button type="button" onClick={this.addNewTodo}>Add</button>
          </div>
          <ul>
            {
              this.props.todos.map(v =>
                (
                  <li key={v.id}>
                    <div className={s.todoWrapper}>
                      <input type="checkbox" value={v.completed} name={`completed-${v.id}`} />
                      <div>{v.title}</div>
                      <button onClick={this.deleteTodo(v.id)}>X</button>
                    </div>
                  </li>
              ))
            }
          </ul>
          <Link to={urls.home()}>Back</Link>
        </div>
      </div>
    );
  }
}
