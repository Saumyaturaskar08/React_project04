import React, { useState } from 'react'

function  Counter () {
  const [count, setcount] = useState(5);
    return (
    <>
    <p>On clicked {count} time</p>
    <button type="button" class="btn btn-danger" onClick={() => setcount(count >= 10 ? " " : count +1)}>Increment </button>
    <button type="button" class="btn btn-warning" onClick={() => setcount(count -1)}>Decrement</button>
    <button type="button" class="btn btn-dark"  onClick={() => setcount(0)} >Reset</button>
   
</>
  )
}
export default Counter;