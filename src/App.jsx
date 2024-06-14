import { useState } from "react";
import { Counter } from "./Counter";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  
  // console.log("Parent Component Render");
  //if there is no dependencies array ....useEffect Render when APP component will render
  //if there is empty [] dependency ......useEffect will only render intialize time...mean first time rendering
  //if we have dependency array that has value that changes....useEffect will render when dependency array will change
  
  // useEffect(() => {
  //   console.log("Parent useEffect Render");
  // },[count])

  const increment = () =>setCount(count+1);
  
  const decrement = () => count <= 0 ? setCount(0) :setCount(count-1);
   

  const reset = () => setCount(0)
  

  return (
    <>
      <div className="container">
        <h2 className="heading">Counter App</h2>
        <p className="data">{count}</p>

        <Counter values={count} increment={increment} decrement={decrement} reset={reset} />

      </div>
    </>
  );
}

export default App;



 

