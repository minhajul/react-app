import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './actions/actionCreator';
import Home from "./components/pages/Home";

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Home);

export default App;
