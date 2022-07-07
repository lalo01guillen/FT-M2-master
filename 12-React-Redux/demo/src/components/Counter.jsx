import React from 'react';
import * as actionsCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



const Counter = ({ counter, increment, decrement, reset, fetchPost}) =>{
 //const counter2 = useSelector((state) => {state.Count})
return (
  <p>
    Clicked: {counter} times
    {' '}
    <button onClick={increment}>
      +
    </button>
    {' '}
    <button onClick={decrement}>
      -
    </button>
    {' '}
    <button onClick={reset}>
      Reset
    </button>
    <button onClick={() => fetchPost(counter)}>
      Fetch
    </button>
  </p>
)
} 

  

const mapStateToProps = (state) => ({
  counter: state.count
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
