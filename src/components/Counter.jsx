import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementAmount,
  reset,
} from "../store/features/counter/counterSlice";
import styles from "./Counter.module.scss";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div className={styles.controls}>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementAmount(20))}>+20</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
