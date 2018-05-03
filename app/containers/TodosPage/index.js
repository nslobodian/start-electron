import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todos from './Todos';
import * as TodoActions from '../../actions/todos';

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TodoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
