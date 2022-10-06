import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./Redux/Store/Slices/CounterSlice";

function App() {
  const value = useSelector((state) => state?.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter :{value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>
        Increment by Amount
      </button>
    </div>
  );
}

export default App;
