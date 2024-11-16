"use client";
// components/Counter.tsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/counterSlice";
const Counter = () => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      <h1>Count: {count}</h1>{" "}
      <button onClick={() => dispatch(increment())}>Increment</button>{" "}
      <button onClick={() => dispatch(decrement())}>Decrement</button>{" "}
    </div>
  );
};
export default Counter;
