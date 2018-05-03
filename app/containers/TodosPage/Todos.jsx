// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import s from './Todo.css';
import urls from '../../utils/urls';

type Props = {
  todos: string[]
};

export default class Todos extends Component<Props> {
  static defaultProps = {
    todos: [],
  }

  render() {
    return (
      <div>
        <div>
          <h2>Todos</h2>
          <ul>
            {
              this.props.todos.map(v => <li key={v}>{v}</li>)
            }
          </ul>
          <Link to={urls.home()}>Back</Link>
        </div>
      </div>
    );
  }
}
