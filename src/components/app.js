import Main from './main';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as action from '../redux/actions';
import {withRouter} from 'react-router'
function mapToState(state)
{
  return {
    posts: state.posts,
    comments: state.comments
  };
}
function mapDispatchToProps(dispatch)
{
  return bindActionCreators(action, dispatch);
}

const App = withRouter(connect(mapToState, mapDispatchToProps)(Main));

export default App;
