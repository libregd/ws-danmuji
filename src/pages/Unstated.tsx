import React, { useState } from "react";
import { createContainer } from "unstated-next";
// use react Hooks lv1
function CounterDisplay1() {
  let [count, setCount] = useState(0);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return (
    <div>
      <button onClick={decrement}>-</button>
      <p>You clicked {count} times</p>
      <button onClick={increment}>+</button>
    </div>
  );
}
// user react hooks lv2,
function useCounter2() {
  let [count, setCount] = useState(0);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

function CounterDisplay2() {
  let counter = useCounter2();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <p>You clicked {counter.count} times</p>
      <button onClick={counter.increment}>+</button>
    </div>
  );
}
// use react hook ,context lv 3

// lv4
function useCounter4(initialState = 0) {
  let [count, setCount] = useState(initialState);
  let decrement = () => setCount(count - 1);
  let increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

let Counter4 = createContainer(useCounter4);

const CounterDisplay4 = () => {
  let counter = Counter4.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  );
};
//  #1: 组合 Containers
function useCounter5() {
    let [count, setCount] = useState(0)
    let decrement = () => setCount(count - 1)
    let increment = () => setCount(count + 1)
    return { count, decrement, increment, setCount }
  }
  let Counter5 = createContainer(useCounter5)

  //
const Unstated = () => {

  return (
    <div className="container">
      <CounterDisplay1 />
      <hr />
      <CounterDisplay2 />

        <hr />
      <Counter4.Provider>

        <CounterDisplay4 />
        </Counter4.Provider>
        <hr />
        <Counter4.Provider initialState={2}>
          <CounterDisplay4 />
        </Counter4.Provider>
        <hr />
        <Counter5.Provider>
        </Counter5.Provider>
    </div>
  );
};
export default Unstated;
