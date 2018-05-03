import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todos from './Todos';
// import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    todos: state.todos.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
