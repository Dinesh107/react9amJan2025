import React, { useEffect, useState } from 'react'

function Timer() {
  
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("Screen refreshed");
  // }, [count])\
  // useEffect(() => {
  //   console.log("Screen refreshed");
  //   checkCount();
  // }, [count])

  useEffect(() => {
    console.log("Screen refreshed");
     //setCount(1);
     setTimeout(() => {
      setCount((previousState) => {
        return previousState + 1
      })
     }, 1000)
  }, []);

  function checkCount() {
    if(count > 10) {
      setCount(1);
    }
  }

  function updateCount() {
    setCount((previousState) => {return previousState + 1})
  }

  return (
    <div>
        <h1>I have rendered {count} times</h1>
        <button onClick={updateCount}>Increase Count</button>
    </div>
  )
}

export default Timer