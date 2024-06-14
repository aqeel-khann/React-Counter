import React from 'react'
// import { useEffect } from 'react';

export const Counter = (props) => {
  // console.log('child component Render');
  // useEffect(() => {
  //   console.log('childe useEffect Render');
  // },[])
  return (
    <>

      <div className="buttons">
        <div>
          <button className="increment" onClick={props.increment}>
            Increment
          </button>
        </div>
        <div>
          <button className="reset" onClick={props.reset}>
            Reset
          </button>
        </div>
        <div>
          <button className="decrement" onClick={props.decrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}
