import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // function increment() {
  //   setCount(count + 1);
  // }
  function increment() {
    console.log(`before setState: ${count}`);

    setCount(count + 1);

    console.log(`after setState: ${count}`);
  }
  return <div onClick={increment}><h1>{count}</h1></div>;
}

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

export default Counter;
