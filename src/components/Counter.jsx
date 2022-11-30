import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementAmount,
  reset,
} from "../store/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementAmount(20))}>+20</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
