import { useSelector, useDispatch } from "react-redux";
import {inc, dec, rnd}from '../actions';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary">Dec</button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">Inc</button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary">RND</button>
    </div>
  )
}

export default Counter;